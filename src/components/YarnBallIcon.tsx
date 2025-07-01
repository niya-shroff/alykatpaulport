import React from 'react';

interface YarnBallIconProps {
  className?: string;
}

export default function YarnBallIcon({ className = "w-6 h-6" }: YarnBallIconProps) {
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
      {/* Main yarn ball circle */}
      <circle cx="12" cy="12" r="8" />
      
      {/* Yarn strands wrapping around the ball */}
      <path d="M4.5 12c0-4.4 3.6-8 8-8" />
      <path d="M19.5 12c0 4.4-3.6 8-8 8" />
      <path d="M12 4.5c4.4 0 8 3.6 8 8" />
      <path d="M12 19.5c-4.4 0-8-3.6-8-8" />
      
      {/* Cross-hatching pattern */}
      <path d="M8 8l8 8" />
      <path d="M16 8l-8 8" />
      
      {/* Small yarn end sticking out */}
      <path d="M20 12l2 0" />
      <path d="M21 11l1 2" />
    </svg>
  );
}