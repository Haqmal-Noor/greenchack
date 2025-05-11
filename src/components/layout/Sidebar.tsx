import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, MessageCircle, LogOut, Settings, Moon, Sun, 
  PlusCircle, Search, User
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useChatStore } from '../../store/chatStore';
import { useAppStore } from '../../store/appStore';
import { Avatar } from '../shared/Avatar';
import { cn } from '../../lib/utils';

export function Sidebar() {
  const { sidebarOpen, toggleSidebar, toggleDarkMode, darkMode } = useAppStore();
  const { user, logout } = useAuthStore();
  const { chats, fetchChats, setActiveChat, activeChat } = useChatStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchChats();
  }, [fetchChats]);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const filteredChats = chats.filter((chat) => {
    if (!searchQuery.trim()) return true;
    
    // For group chats, search by name
    if (chat.isGroupChat && chat.name) {
      return chat.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    // For direct chats, search by participant name
    if (!chat.isGroupChat && Array.isArray(chat.participants)) {
      const otherParticipant = chat.participants.find((p) => {
        if (typeof p === 'string') return p !== user?._id;
        return p._id !== user?._id;
      });
      
      if (typeof otherParticipant === 'object' && otherParticipant.username) {
        return otherParticipant.username.toLowerCase().includes(searchQuery.toLowerCase());
      }
    }
    
    return false;
  });
  
  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 bg-white dark:bg-dark-200 w-80 border-r border-gray-200 dark:border-gray-800 flex flex-col z-10 transition-all duration-300",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div className="flex items-center">
          <MessageCircle className="h-6 w-6 text-primary-600" />
          <h1 className="text-xl font-bold ml-2">Echo Chat</h1>
        </div>
        <button
          onClick={toggleSidebar}
          className="lg:hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-dark-100"
          aria-label="Toggle sidebar"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search chats..."
            className="input pl-10 py-2 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between">
        <button
          className="btn btn-secondary text-sm py-1.5"
          onClick={() => navigate('/contacts')}
        >
          <User className="h-4 w-4 mr-1" />
          Contacts
        </button>
        <button
          className="btn btn-primary text-sm py-1.5"
          onClick={() => setShowNewChatModal(true)}
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          New Chat
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <h2 className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Recent Chats
        </h2>
        <ul className="space-y-1 px-2">
          {filteredChats.length === 0 && (
            <li className="px-2 py-8 text-center text-gray-500 dark:text-gray-400">
              <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No chats yet. Start a new conversation!</p>
            </li>
          )}
          
          {filteredChats.map((chat) => {
            // Determine chat name and avatar
            let chatName = chat.name || '';
            let avatarSrc = '';
            let isOnline = false;
            
            if (!chat.isGroupChat && Array.isArray(chat.participants)) {
              const otherParticipant = chat.participants.find((p) => {
                if (typeof p === 'string') return p !== user?._id;
                return p._id !== user?._id;
              });
              
              if (typeof otherParticipant === 'object') {
                chatName = otherParticipant.username;
                avatarSrc = otherParticipant.avatar || '';
                isOnline = otherParticipant.status === 'online';
              }
            }
            
            const isActive = activeChat?._id === chat._id;
            const hasUnread = chat.lastMessage && 
              Array.isArray(chat.lastMessage.readBy) && 
              !chat.lastMessage.readBy.includes(user?._id || '');
            
            return (
              <li key={chat._id}>
                <button
                  className={cn(
                    "w-full flex items-center px-3 py-2 rounded-md transition-colors",
                    isActive 
                      ? "bg-primary-50 text-primary-700 dark:bg-dark-100" 
                      : "hover:bg-gray-100 dark:hover:bg-dark-100"
                  )}
                  onClick={() => setActiveChat(chat)}
                >
                  <div className="relative flex-shrink-0">
                    <Avatar 
                      name={chatName}
                      src={avatarSrc}
                      isGroup={chat.isGroupChat} 
                      size="md"
                    />
                    {isOnline && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-success-500 border-2 border-white dark:border-dark-200 rounded-full"></span>
                    )}
                  </div>
                  <div className="ml-3 flex-1 overflow-hidden">
                    <div className="flex justify-between items-center">
                      <p className={cn(
                        "text-sm font-medium truncate",
                        hasUnread && "font-bold"
                      )}>
                        {chatName}
                      </p>
                      {chat.lastMessage && (
                        <span className="text-xs text-gray-500">
                          {new Date(chat.lastMessage.createdAt).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {chat.lastMessage ? chat.lastMessage.content : 'No messages yet'}
                    </p>
                  </div>
                  {hasUnread && (
                    <span className="ml-2 h-2 w-2 bg-primary-500 rounded-full"></span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar 
              name={user?.username || ''}
              src={user?.avatar}
              size="sm"
            />
            <div className="ml-3">
              <p className="text-sm font-medium">{user?.username}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-dark-100"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => navigate('/settings')}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-dark-100"
              aria-label="Settings"
            >
              <Settings className="h-5 w-5" />
            </button>
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-dark-100"
              aria-label="Logout"
            >
              <LogOut className="h-5 w-5 text-error-500" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}