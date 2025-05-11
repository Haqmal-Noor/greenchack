import React from 'react';
import { Users } from 'lucide-react';
import { cn, getInitials, generateAvatarColor } from '../../lib/utils';

interface AvatarProps {
  name: string;
  src?: string | null;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isGroup?: boolean;
  className?: string;
}

export function Avatar({ name, src, size = 'md', isGroup = false, className }: AvatarProps) {
  const initials = getInitials(name);
  const colorClass = generateAvatarColor(name);
  
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg',
  };
  
  return (
    <div
      className={cn(
        'relative rounded-full flex items-center justify-center font-medium text-white',
        sizeClasses[size],
        !src && colorClass,
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : isGroup ? (
        <Users className="h-1/2 w-1/2" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}