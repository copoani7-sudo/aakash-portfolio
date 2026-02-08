
import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, className = '', delay = '0s' }) => {
  return (
    <div 
      className={`absolute animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
