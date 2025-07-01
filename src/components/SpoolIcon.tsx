import React from 'react';

interface SpoolIconProps {
  className?: string;
}

export default function SpoolIcon({ className = "w-6 h-6" }: SpoolIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Spool body (cylinder) */}
      <rect x="8" y="6" width="8" height="12" rx="1" />
      
      {/* Top rim */}
      <ellipse cx="12" cy="6" rx="6" ry="2" />
      
      {/* Bottom rim */}
      <ellipse cx="12" cy="18" rx="6" ry="2" />
      
      {/* Thread wrapped around spool */}
      <path d="M8 8h8" />
      <path d="M8 10h8" />
      <path d="M8 12h8" />
      <path d="M8 14h8" />
      <path d="M8 16h8" />
      
      {/* Thread end hanging */}
      <path d="M18 12l3 2" />
      <path d="M21 14l0 2" />
    </svg>
  );
}