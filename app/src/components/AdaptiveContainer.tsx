import React from 'react';

interface AdaptiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * AdaptiveContainer component for better responsiveness across different screen sizes.
 * This container helps maintain a consistent layout across different device sizes.
 */
const AdaptiveContainer: React.FC<AdaptiveContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default AdaptiveContainer;
