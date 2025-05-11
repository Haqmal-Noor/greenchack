import Message from '../models/Message.js';
import Chat from '../models/Chat.js';
import User from '../models/User.js';

// Get all messages for a chat
export const getMessages = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    
    // Find the chat
    const chat = await Chat.findById(chatId);
    
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    
    // Check if the user is a participant in the chat
    if (!chat.participants.includes(req.user._id)) {
      return res.status(403).json({ message: 'You are not authorized to view these messages' });
    }
    
    // Find all messages for the chat
    const messages = await Message.find({ chatId })
      .populate('sender', 'username avatar')
      .sort({ createdAt: 1 });
    
    res.json(messages);
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Send a message
export const sendMessage = async (req, res) => {
  try {
    const { content, contentType = 'text', fileUrl, fileName } = req.body;
    const chatId = req.params.chatId;
    
    if (!content && contentType !== 'image' && contentType !== 'file') {
      return res.status(400).json({ message: 'Message content is required' });
    }
    
    // Find the chat
    const chat = await Chat.findById(chatId);
    
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    
    // Check if the user is a participant in the chat
    if (!chat.participants.includes(req.user._id)) {
      return res.status(403).json({ message: 'You are not authorized to send messages in this chat' });
    }
    
    // Create a new message
    const messageData = {
      chatId,
      sender: req.user._id,
      content,
      contentType,
      readBy: [req.user._id], // Sender has read the message
    };
    
    if (contentType === 'image' || contentType === 'file') {
      messageData.fileUrl = fileUrl;
      messageData.fileName = fileName;
    }
    
    const message = await Message.create(messageData);
    
    // Update the chat's lastMessage
    chat.lastMessage = message._id;
    await chat.save();
    
    // Populate the sender
    const populatedMessage = await Message.findById(message._id).populate(
      'sender',
      'username avatar'
    );
    
    res.status(201).json(populatedMessage);
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Mark a message as read
export const markMessageAsRead = async (req, res) => {
  try {
    const messageId = req.params.messageId;
    
    // Find the message
    const message = await Message.findById(messageId);
    
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    // Find the chat
    const chat = await Chat.findById(message.chatId);
    
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    
    // Check if the user is a participant in the chat
    if (!chat.participants.includes(req.user._id)) {
      return res.status(403).json({ message: 'You are not authorized to access this message' });
    }
    
    // Check if the user has already read the message
    if (message.readBy.includes(req.user._id)) {
      return res.json(message);
    }
    
    // Add the user to the readBy array
    message.readBy.push(req.user._id);
    await message.save();
    
    // Populate the sender
    const populatedMessage = await Message.findById(message._id).populate(
      'sender',
      'username avatar'
    );
    
    res.json(populatedMessage);
  } catch (error) {
    console.error('Mark message as read error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a message
export const deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.messageId;
    
    // Find the message
    const message = await Message.findById(messageId);
    
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    // Check if the user is the sender of the message
    if (message.sender.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'You can only delete your own messages' });
    }
    
    await message.deleteOne();
    
    // Check if this was the last message in the chat
    const chat = await Chat.findById(message.chatId);
    
    if (chat && chat.lastMessage?.toString() === messageId) {
      // Find the new last message
      const newLastMessage = await Message.findOne({ chatId: chat._id })
        .sort({ createdAt: -1 });
      
      chat.lastMessage = newLastMessage ? newLastMessage._id : null;
      await chat.save();
    }
    
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Delete message error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};