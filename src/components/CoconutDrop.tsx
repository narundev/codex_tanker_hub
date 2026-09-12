import React, { useEffect, useRef } from 'react';
import { CoconutPhysics, setGlobalCoconutPhysics } from '../utils/coconutPhysics';

export const CoconutDrop: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const physics = new CoconutPhysics(canvasRef.current);
    setGlobalCoconutPhysics(physics);

    return () => {
      physics.destroy();
      setGlobalCoconutPhysics(null);
    };
  }, []);

  return (
    <canvas
      id="physics-canvas"
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-[9000]"
    />
  );
};
