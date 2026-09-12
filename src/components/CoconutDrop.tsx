import React from 'react';
import { useBureau } from '../context/BureauContext';

export const CoconutDrop: React.FC = () => {
  const { coconuts } = useBureau();

  if (coconuts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {coconuts.map((coconut) => (
        <div
          key={coconut.id}
          className="absolute animate-coconut-smooth filter drop-shadow-md select-none leading-none"
          style={{
            left: `${coconut.left}%`,
            top: `-70px`,
            fontSize: `${coconut.size}px`,
            animationDuration: `${coconut.speed}s`
          }}
        >
          🥥
        </div>
      ))}
    </div>
  );
};
