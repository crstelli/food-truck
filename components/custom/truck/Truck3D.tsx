"use client"; // obbligatorio in Next.js 13+ se usi React Three Fiber

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function TruckModel() {
  const ref = useRef<any>(null);
  const gltf = useGLTF("/models/scene.glb");
  const [spin, setSpin] = useState(10); // velocità iniziale alta
  const normalSpeed = 0.3; // velocità normale dopo lo spin

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += spin * delta;

      // decresce velocemente la velocità fino a quella normale
      if (spin > normalSpeed) {
        setSpin(spin - delta * 5); // decelerazione
      } else {
        setSpin(normalSpeed);
      }
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={1.7}
      position={[0, -0.6, 0]}
    />
  );
}

export function Truck3D() {
  return (
    <Canvas camera={{ position: [7, 4, 0], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 7]} intensity={0.8} />
      <Suspense fallback={null}>
        <TruckModel />
      </Suspense>
      <OrbitControls enableDamping={true} dampingFactor={0.05} />
    </Canvas>
  );
}
