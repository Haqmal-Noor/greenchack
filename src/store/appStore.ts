import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState } from '../types';

export const useAppStore = create<
  AppState & {
    toggleDarkMode: () => void;
    toggleSidebar: () => void;
    showNotification: (message: string, type: 'success' | 'error' | 'info') => void;
    clearNotification: () => void;
  }
>()(
  persist(
    (set) => ({
      darkMode: false,
      sidebarOpen: true,
      notification: null,

      toggleDarkMode: () => {
        set((state) => {
          const newDarkMode = !state.darkMode;
          
          if (newDarkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          
          return { darkMode: newDarkMode };
        });
      },

      toggleSidebar: () => {
        set((state) => ({ sidebarOpen: !state.sidebarOpen }));
      },

      showNotification: (message, type) => {
        set({
          notification: {
            show: true,
            message,
            type,
          },
        });
        
        // Auto clear notification after 5 seconds
        setTimeout(() => {
          set({ notification: null });
        }, 5000);
      },

      clearNotification: () => {
        set({ notification: null });
      },
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ darkMode: state.darkMode }),
    }
  )
);