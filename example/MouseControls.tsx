// MouseControls.tsx
import React, { useRef, useEffect } from 'react';
import { extend, useThree } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { usePlayer } from './PlayerContext';

extend({ OrbitControls });

export default function MouseControls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const { position } = usePlayer();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.copy(position);
    }
  }, [position]);

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      maxDistance={0.1}
      minDistance={0}
    />
  );
}