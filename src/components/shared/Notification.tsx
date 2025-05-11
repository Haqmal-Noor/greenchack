import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import { cn } from '../../lib/utils';

export function Notification() {
  const { notification, clearNotification } = useAppStore();
  
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        clearNotification();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [notification, clearNotification]);
  
  if (!notification || !notification.show) return null;
  
  const { type, message } = notification;
  
  const icons = {
    success: <CheckCircle className="h-5 w-5" />,
    error: <AlertCircle className="h-5 w-5" />,
    info: <Info className="h-5 w-5" />,
  };
  
  const colors = {
    success: 'bg-success-50 text-success-700 border-success-500',
    error: 'bg-error-50 text-error-700 border-error-500',
    info: 'bg-primary-50 text-primary-700 border-primary-500',
  };
  
  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div
        className={cn(
          'flex items-center p-4 rounded-lg shadow-md border-l-4',
          colors[type]
        )}
      >
        <div className="flex-shrink-0 mr-3">{icons[type]}</div>
        <div className="flex-1 mr-4">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={clearNotification}
          className="flex-shrink-0 hover:bg-gray-200 dark:hover:bg-dark-100 rounded-full p-1"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}