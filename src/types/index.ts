export interface User {
  _id: string;
  username: string;
  email: string;
  avatar?: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: Date | string;
  createdAt: Date | string;
}

export interface Message {
  _id: string;
  chatId: string;
  sender: User | string;
  content: string;
  contentType: 'text' | 'image' | 'file';
  fileUrl?: string;
  fileName?: string;
  readBy: string[];
  createdAt: Date | string;
}

export interface Chat {
  _id: string;
  name?: string;
  isGroupChat: boolean;
  participants: User[] | string[];
  lastMessage?: Message;
  admin?: User | string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ChatState {
  chats: Chat[];
  activeChat: Chat | null;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface AppState {
  darkMode: boolean;
  sidebarOpen: boolean;
  notification: {
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  } | null;
}

export interface TypeIndicator {
  userId: string;
  username: string;
  chatId: string;
}