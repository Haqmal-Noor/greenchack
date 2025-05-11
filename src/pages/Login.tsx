import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Moon, Sun } from 'lucide-react';
import { LoginForm } from '../components/auth/LoginForm';
import { useAuthStore } from '../store/authStore';
import { useAppStore } from '../store/appStore';

export function Login() {
  const { isAuthenticated } = useAuthStore();
  const { darkMode, toggleDarkMode } = useAppStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/chats');
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-300">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <MessageCircle className="h-6 w-6 text-primary-600" />
          <h1 className="text-xl font-bold ml-2">Echo Chat</h1>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-dark-100"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
      
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Echo Chat. All rights reserved.</p>
      </footer>
    </div>
  );
}