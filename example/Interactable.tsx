import { RigidBody } from "@react-three/rapier";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import React from "react";

export default function Interactable() {
  return (
    <group position={[-10, -1, 10]}>
      <RigidBody type="fixed" colliders="trimesh" rotation={[0, Math.PI, 0]}>
        <meshBasicMaterial color="limegreen"/>
        <boxGeometry/>
      </RigidBody>
      <Text
        rotation={[0, Math.PI, 0]}
        position={[3.5, 3, 0]}
        color="black"
        fontSize={0.5}
      >
        Press E to interact
      </Text>
    </group>
  );
}
