// TeleportTarget.tsx
import React from "react";
import { usePlayer } from './PlayerContext';
import { RigidBody, CylinderCollider } from "@react-three/rapier";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface TeleportTargetProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  name: string;
}

export default function TeleportTarget({ 
  position = [0, 0, 0], 
  rotation = [0, Math.PI, 0],
  name = "Teleport Target"
}: TeleportTargetProps) {
  const { setPosition, controlScheme, setLocationName } = usePlayer();
  const targetPosition = new THREE.Vector3(...position);

  const handleClick = () => {
    if (controlScheme === 'mouse') {
      setPosition(targetPosition)
      setLocationName(name)
      console.log(`Teleported to ${name}`)
    }
  };

  return (
    <group position={targetPosition} rotation={rotation} onClick={handleClick}>
      <RigidBody type="fixed">
        <CylinderCollider args={[0.05, 0.5]} />
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
          <meshLambertMaterial color="rgb(255,100,100)" />
        </mesh>
      </RigidBody>
      <Text
        position={[0, 1, 0]}
        color="black"
        fontSize={0.5}
        anchorY="bottom"
      >
        {name}
      </Text>
    </group>
  );
}