import React from 'react';
import { usePlayer } from './PlayerContext';
import { Vector3 } from 'three';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

interface LocationColliderProps {
  position: [number, number, number];
  scale: [number, number, number];
  name: string;
  debug?: boolean;
}

const LocationCollider = ({ 
  position,
  scale,
  name,
  debug = true 
}: LocationColliderProps): JSX.Element => {
  const { setLocationName } = usePlayer();

  const handleIntersectionEnter = () => {
    setLocationName(name);
  };

  return (
    <RigidBody type="fixed" position={position} colliders={false}>
      <CuboidCollider 
        args={scale} 
        sensor
        onIntersectionEnter={handleIntersectionEnter}
      />
      {debug && (
        <mesh scale={scale}>
          <boxGeometry />
          <meshBasicMaterial wireframe color="red" opacity={0.5} transparent/>
        </mesh>
      )}
    </RigidBody>
  );
};

export default LocationCollider;