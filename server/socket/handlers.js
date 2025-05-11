import User from '../models/User.js';

export const setupSocketHandlers = (io) => {
  // Store online users
  const onlineUsers = new Map();
  
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.user.username} (${socket.user._id})`);
    
    // Add user to online users
    onlineUsers.set(socket.user._id.toString(), socket.id);
    
    // Broadcast user status change to all clients
    io.emit('user_status_change', {
      userId: socket.user._id,
      status: 'online',
    });
    
    // Join user's personal room for direct messages
    socket.join(socket.user._id.toString());
    
    // Handle typing indicators
    socket.on('typing', async (data) => {
      const { chatId, userId, username } = data;
      
      // Broadcast to all users in the chat except the sender
      socket.to(chatId).emit('typing', { chatId, userId, username });
    });
    
    // Handle sending messages
    socket.on('send_message', async (message) => {
      const { chatId } = message;
      
      // Broadcast to all users in the chat
      io.to(chatId).emit('new_message', message);
    });
    
    // Handle message read receipts
    socket.on('mark_read', async (data) => {
      const { messageId, chatId, userId } = data;
      
      // Broadcast to all users in the chat
      socket.to(chatId).emit('message_read', { messageId, userId });
    });
    
    // Handle disconnection
    socket.on('disconnect', async () => {
      console.log(`User disconnected: ${socket.user.username} (${socket.user._id})`);
      
      // Remove user from online users
      onlineUsers.delete(socket.user._id.toString());
      
      // Update user status in database
      await User.findByIdAndUpdate(socket.user._id, {
        status: 'offline',
        lastSeen: new Date(),
      });
      
      // Broadcast user status change to all clients
      io.emit('user_status_change', {
        userId: socket.user._id,
        status: 'offline',
      });
    });
  });
};