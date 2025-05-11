import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { ChatHeader } from '../components/chat/ChatHeader';
import { MessageList } from '../components/chat/MessageList';
import { MessageInput } from '../components/chat/MessageInput';
import { Notification } from '../components/shared/Notification';
import { useAuthStore } from '../store/authStore';
import { useAppStore } from '../store/appStore';
import { cn } from '../lib/utils';

export function Chat() {
  const { isAuthenticated } = useAuthStore();
  const { sidebarOpen } = useAppStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    
    // Initialize dark mode from stored preference
    if (document.documentElement.classList.contains('dark')) {
      useAppStore.setState({ darkMode: true });
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="h-screen flex">
      <Sidebar />
      
      <div
        className={cn(
          "flex-1 flex flex-col transition-all duration-300",
          sidebarOpen ? "lg:ml-80" : "ml-0"
        )}
      >
        <ChatHeader />
        <MessageList />
        <MessageInput />
      </div>
      
      <Notification />
    </div>
  );
}