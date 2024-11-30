import React from 'react';

export function Card({ className = '', children, ...props }) {
  return (
    <div 
      className={`rounded-lg border bg-white shadow-sm p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}