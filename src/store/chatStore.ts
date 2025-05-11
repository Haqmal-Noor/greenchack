import { create } from 'zustand';
import axios from 'axios';
import { ChatState, Chat, Message } from '../types';
import { API_URL } from '../config';
import { useAuthStore } from './authStore';

export const useChatStore = create<
  ChatState & {
    fetchChats: () => Promise<void>;
    fetchMessages: (chatId: string) => Promise<void>;
    sendMessage: (chatId: string, content: string, contentType?: 'text' | 'image' | 'file', fileUrl?: string, fileName?: string) => Promise<void>;
    createChat: (participantIds: string[], name?: string, isGroupChat?: boolean) => Promise<Chat>;
    setActiveChat: (chat: Chat | null) => void;
    markAsRead: (chatId: string, messageId: string) => Promise<void>;
  }
>((set, get) => ({
  chats: [],
  activeChat: null,
  messages: [],
  isLoading: false,
  error: null,

  fetchChats: async () => {
    set({ isLoading: true, error: null });
    try {
      const token = useAuthStore.getState().token;
      const response = await axios.get(`${API_URL}/chats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      set({
        chats: response.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch chats',
      });
    }
  },

  fetchMessages: async (chatId) => {
    set({ isLoading: true, error: null });
    try {
      const token = useAuthStore.getState().token;
      const response = await axios.get(`${API_URL}/messages/${chatId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      set({
        messages: response.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch messages',
      });
    }
  },

  sendMessage: async (chatId, content, contentType = 'text', fileUrl, fileName) => {
    try {
      const token = useAuthStore.getState().token;
      const userId = useAuthStore.getState().user?._id;
      
      const messageData = {
        content,
        contentType,
        fileUrl,
        fileName,
      };
      
      const response = await axios.post(
        `${API_URL}/messages/${chatId}`,
        messageData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      const newMessage = response.data;
      
      // Update messages array with the new message
      set((state) => ({
        messages: [...state.messages, newMessage],
      }));
      
      // Update last message in the chat
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat._id === chatId
            ? { ...chat, lastMessage: newMessage }
            : chat
        ),
      }));
      
      return newMessage;
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to send message',
      });
      throw error;
    }
  },

  createChat: async (participantIds, name = '', isGroupChat = false) => {
    set({ isLoading: true, error: null });
    try {
      const token = useAuthStore.getState().token;
      const response = await axios.post(
        `${API_URL}/chats`,
        {
          participants: participantIds,
          name,
          isGroupChat,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      const newChat = response.data;
      
      set((state) => ({
        chats: [...state.chats, newChat],
        activeChat: newChat,
        isLoading: false,
      }));
      
      return newChat;
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to create chat',
      });
      throw error;
    }
  },

  setActiveChat: (chat) => {
    set({ activeChat: chat });
    
    if (chat) {
      get().fetchMessages(chat._id);
    }
  },

  markAsRead: async (chatId, messageId) => {
    try {
      const token = useAuthStore.getState().token;
      await axios.put(
        `${API_URL}/messages/${messageId}/read`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      // Update readBy status in the message
      set((state) => ({
        messages: state.messages.map((message) =>
          message._id === messageId
            ? {
                ...message,
                readBy: [...message.readBy, useAuthStore.getState().user?._id as string],
              }
            : message
        ),
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to mark message as read',
      });
    }
  },
}));