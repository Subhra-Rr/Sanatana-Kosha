import React from 'react';

export const Diya: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center relative ${sizeMap[size]} ${className}`}>
      {/* Flame */}
      <div className="diya-flame w-2 h-4 bg-amber-400 rounded-full blur-[0.5px] border border-amber-300 shadow-[0_0_10px_#f59e0b] -mb-1" />
      {/* Terracotta / Brass Lamp Bowl */}
      <div className="w-full h-1/2 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 rounded-b-full border-t border-amber-500/50 shadow-md flex items-center justify-center">
        <div className="w-1/3 h-0.5 bg-amber-400/40 rounded-full" />
      </div>
    </div>
  );
};
