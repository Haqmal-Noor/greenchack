import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { SOCKET_URL } from '../config';
import { useAuthStore } from '../store/authStore';
import { useChatStore } from '../store/chatStore';
import { Message, TypeIndicator } from '../types';

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [typingUsers, setTypingUsers] = useState<TypeIndicator[]>([]);
  
  const { user, token } = useAuthStore();
  const { 
    activeChat, 
    messages, 
    chats,
    setActiveChat,
    fetchChats 
  } = useChatStore();
  
  useEffect(() => {
    if (!user || !token) return;
    
    // Initialize socket
    const socketInstance = io(SOCKET_URL, {
      auth: {
        token,
      },
    });
    
    // Set up event listeners
    socketInstance.on('connect', () => {
      console.log('Socket connected');
      setIsConnected(true);
    });
    
    socketInstance.on('disconnect', () => {
      console.log('Socket disconnected');
      setIsConnected(false);
    });
    
    socketInstance.on('error', (error) => {
      console.error('Socket error:', error);
    });
    
    // Message events
    socketInstance.on('new_message', (message: Message) => {
      console.log('New message received:', message);
      
      if (activeChat && message.chatId === activeChat._id) {
        // Add message to current chat
        useChatStore.setState({
          messages: [...messages, message],
        });
        
        // Mark as read if we're in the chat
        useChatStore.getState().markAsRead(message.chatId, message._id);
      }
      
      // Update chat list to show latest message
      useChatStore.setState({
        chats: chats.map((chat) =>
          chat._id === message.chatId
            ? { ...chat, lastMessage: message }
            : chat
        ),
      });
      
      // Refetch chats to ensure they're in correct order
      fetchChats();
    });
    
    // Typing indicators
    socketInstance.on('typing', (data: TypeIndicator) => {
      if (activeChat && data.chatId === activeChat._id) {
        // Add user to typing list if not already there
        setTypingUsers((prev) => {
          if (!prev.some((u) => u.userId === data.userId)) {
            return [...prev, data];
          }
          return prev;
        });
        
        // Remove typing indicator after 3 seconds of inactivity
        setTimeout(() => {
          setTypingUsers((prev) => prev.filter((u) => u.userId !== data.userId));
        }, 3000);
      }
    });
    
    // User status changes
    socketInstance.on('user_status_change', ({ userId, status }) => {
      // Update user status in chat participants
      useChatStore.setState({
        chats: chats.map((chat) => ({
          ...chat,
          participants: Array.isArray(chat.participants)
            ? chat.participants.map((p) => {
                const participant = typeof p === 'string' ? p : p._id;
                if (participant === userId) {
                  return {
                    ...(typeof p === 'string' ? { _id: p } : p),
                    status,
                  };
                }
                return p;
              })
            : chat.participants,
        })),
      });
    });
    
    // Read receipts
    socketInstance.on('message_read', ({ messageId, userId }) => {
      useChatStore.setState({
        messages: messages.map((msg) =>
          msg._id === messageId
            ? { ...msg, readBy: [...msg.readBy, userId] }
            : msg
        ),
      });
    });
    
    setSocket(socketInstance);
    
    return () => {
      socketInstance.disconnect();
    };
  }, [user, token]);
  
  // Function to emit typing event
  const emitTyping = (chatId: string) => {
    if (socket && user && activeChat) {
      socket.emit('typing', {
        chatId,
        userId: user._id,
        username: user.username,
      });
    }
  };
  
  // Function to send message via socket
  const sendSocketMessage = (message: any) => {
    if (socket) {
      socket.emit('send_message', message);
    }
  };
  
  return {
    socket,
    isConnected,
    typingUsers,
    emitTyping,
    sendSocketMessage,
  };
};