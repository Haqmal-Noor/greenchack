import Chat from '../models/Chat.js';
import User from '../models/User.js';

// Get all chats for a user
export const getChats = async (req, res) => {
  try {
    // Find all chats where the user is a participant
    const chats = await Chat.find({
      participants: { $elemMatch: { $eq: req.user._id } },
    })
      .populate('participants', '-password')
      .populate('admin', '-password')
      .populate('lastMessage')
      .sort({ updatedAt: -1 });
    
    // Populate the sender of the last message
    const populatedChats = await User.populate(chats, {
      path: 'lastMessage.sender',
      select: 'username avatar',
    });
    
    res.json(populatedChats);
  } catch (error) {
    console.error('Get chats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get chat by ID
export const getChatById = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id)
      .populate('participants', '-password')
      .populate('admin', '-password')
      .populate('lastMessage');
    
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    
    // Check if the user is a participant in the chat
    if (!chat.participants.some((p) => p._id.toString() === req.user._id.toString())) {
      return res.status(403).json({ message: 'You are not authorized to access this chat' });
    }
    
    // Populate the sender of the last message
    const populatedChat = await User.populate(chat, {
      path: 'lastMessage.sender',
      select: 'username avatar',
    });
    
    res.json(populatedChat);
  } catch (error) {
    console.error('Get chat by ID error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new chat
export const createChat = async (req, res) => {
  try {
    const { participants, name, isGroupChat } = req.body;
    
    if (!participants || participants.length === 0) {
      return res.status(400).json({ message: 'Please provide participants' });
    }
    
    // Add the current user to the participants if not already included
    if (!participants.includes(req.user._id.toString())) {
      participants.push(req.user._id.toString());
    }
    
    // For one-on-one chats, check if a chat already exists
    if (!isGroupChat && participants.length === 2) {
      const existingChat = await Chat.findOne({
        isGroupChat: false,
        participants: { $all: participants, $size: 2 },
      })
        .populate('participants', '-password')
        .populate('lastMessage');
      
      if (existingChat) {
        // Populate the sender of the last message
        const populatedChat = await User.populate(existingChat, {
          path: 'lastMessage.sender',
          select: 'username avatar',
        });
        
        return res.json(populatedChat);
      }
    }
    
    // Create a new chat
    const chatData = {
      name: isGroupChat ? name : '',
      isGroupChat: !!isGroupChat,
      participants,
      admin: isGroupChat ? req.user._id : null,
    };
    
    const chat = await Chat.create(chatData);
    
    // Populate the participants and admin
    const fullChat = await Chat.findById(chat._id)
      .populate('participants', '-password')
      .populate('admin', '-password');
    
    res.status(201).json(fullChat);
  } catch (error) {
    console.error('Create chat error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a chat
export const updateChat = async (req, res) => {
  try {
    const { name, participants } = req.body;
    
    // Find the chat
    const chat = await Chat.findById(req.params.id);
    
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    
    // Check if the user is the admin of the group chat
    if (chat.isGroupChat && chat.admin.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Only the admin can update the group' });
    }
    
    // Update the chat
    chat.name = name || chat.name;
    
    if (participants) {
      // Make sure the current user is still a participant
      if (!participants.includes(req.user._id.toString())) {
        participants.push(req.user._id.toString());
      }
      
      chat.participants = participants;
    }
    
    await chat.save();
    
    // Populate the participants and admin
    const updatedChat = await Chat.findById(chat._id)
      .populate('participants', '-password')
      .populate('admin', '-password')
      .populate('lastMessage');
    
    // Populate the sender of the last message
    const populatedChat = await User.populate(updatedChat, {
      path: 'lastMessage.sender',
      select: 'username avatar',
    });
    
    res.json(populatedChat);
  } catch (error) {
    console.error('Update chat error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a chat
export const deleteChat = async (req, res) => {
  try {
    // Find the chat
    const chat = await Chat.findById(req.params.id);
    
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    
    // Check if the user is the admin of the group chat or a participant in a one-on-one chat
    if (
      (chat.isGroupChat && chat.admin.toString() !== req.user._id.toString()) ||
      (!chat.participants.some((p) => p.toString() === req.user._id.toString()))
    ) {
      return res.status(403).json({ message: 'You are not authorized to delete this chat' });
    }
    
    await chat.deleteOne();
    
    res.json({ message: 'Chat deleted successfully' });
  } catch (error) {
    console.error('Delete chat error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};