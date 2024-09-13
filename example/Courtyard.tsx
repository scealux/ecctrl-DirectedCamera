import { RigidBody } from "@react-three/rapier";
import { useGLTF, Text } from "@react-three/drei";
import { useEffect } from "react";
import React from "react";
import * as THREE from "three";

export default function Courtyard() {
  // Load models
  const courtyard = useGLTF("./museum.glb");

  useEffect(() => {
    // Receive Shadows
    courtyard.scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.receiveShadow = true;
        //child.castShadow = true;
      }
    });
  }, []);

  return (
    <group position={[-10, -1, 10]}>
      <RigidBody type="fixed" colliders="trimesh" rotation={[0, Math.PI, 0]}>
        <primitive object={courtyard.scene} />
      </RigidBody>
      {/* <Text
        rotation={[0, Math.PI, 0]}
        position={[3.5, 3, 0]}
        color="black"
        fontSize={0.5}
      >
        23.5 Deg
      </Text> */}
    </group>
  );
}
