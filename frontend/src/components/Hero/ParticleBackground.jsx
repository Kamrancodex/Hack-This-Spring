import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 3000 }) {
  const mesh = useRef();
  const light = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Create particles with varying sizes and colors
  const particles = useMemo(() => {
    const temp = [];
    const colors = ["#2563eb", "#60a4ec", "#3b82f6", "#1d4ed8"];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 50 + 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      temp.push({
        position: [x, y, z],
        size: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.2 + 0.1,
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    // Rotate light
    const t = state.clock.elapsedTime;
    light.current.position.x = Math.sin(t * 0.2) * 20;
    light.current.position.z = Math.cos(t * 0.2) * 20;

    // Update particles
    particles.forEach((particle, i) => {
      const time = state.clock.elapsedTime * particle.speed;

      dummy.position.set(
        particle.position[0] + Math.sin(time + i) * 0.2,
        particle.position[1] + Math.cos(time + i * 0.8) * 0.2,
        particle.position[2] + Math.sin(time * 0.5 + i) * 0.2
      );

      dummy.rotation.x = time * 0.2;
      dummy.rotation.y = time * 0.1;

      dummy.scale.setScalar(particle.size * (1 + Math.sin(time + i) * 0.2));
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight
        ref={light}
        position={[10, 10, 10]}
        intensity={1.5}
        color="#ffffff"
      />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <octahedronGeometry args={[0.2]} />
        <meshPhongMaterial
          color="#2563eb"
          emissive="#1d4ed8"
          emissiveIntensity={0.5}
          shininess={20}
          transparent
          opacity={0.7}
        />
      </instancedMesh>
    </>
  );
}

export default function ParticleBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 70], fov: 60 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(circle at center, #0a192f 0%, #020617 100%)",
        pointerEvents: "none",
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <fog attach="fog" args={["#020617", 30, 100]} />
      <ambientLight intensity={0.4} />
      <Particles />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
