"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Truck3D() {
  const [mouseOver, setMouseOver] = useState(false);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      35,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 4);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Luce
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(3, 3, 3);
    scene.add(light);

    // Modello camioncino
    const loader = new GLTFLoader();
    let truck: THREE.Object3D | null = null;

    loader.load("/truck.gltf", (gltf) => {
      truck = gltf.scene;
      truck.scale.set(1.2, 1.2, 1.2);
      scene.add(truck);
    });

    // Animazione
    const animate = () => {
      requestAnimationFrame(animate);

      if (truck) {
        if (mouseOver) {
          truck.rotation.y += 0.02;
        } // rotazione
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      ref={mountRef}
      className="w-full h-[300px]"
    />
  );
}
