import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import styles from "./Countdown.module.css";

function NumberCube({ number, position, shouldRotate }) {
  const meshRef = useRef();
  const edgesRef = useRef();
  const [targetRotation, setTargetRotation] = useState(0);

  useEffect(() => {
    if (shouldRotate) {
      setTargetRotation((prev) => prev + Math.PI);
    }
  }, [number, shouldRotate]);

  useFrame(() => {
    if (meshRef.current && edgesRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotation,
        0.2
      );
      edgesRef.current.rotation.x = meshRef.current.rotation.x;
    }
  });

  return (
    <group position={position}>
      {/* Main cube */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial
          color="#000033"
          metalness={0.7}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Glowing edges */}
      <lineSegments ref={edgesRef}>
        <edgesGeometry attach="geometry">
          <boxGeometry args={[2.02, 2.02, 2.02]} />
        </edgesGeometry>
        <lineBasicMaterial
          attach="material"
          color="#4f90ff"
          linewidth={2}
          transparent
          opacity={0.8}
        />
      </lineSegments>

      {/* Static numbers */}
      <group position={[0, 0, 1.01]}>
        <Text fontSize={1.2} color="#4f90ff" anchorX="center" anchorY="middle">
          {number}
        </Text>
      </group>

      <group position={[0, 0, -1.01]} rotation={[0, Math.PI, 0]}>
        <Text fontSize={1.2} color="#4f90ff" anchorX="center" anchorY="middle">
          {number}
        </Text>
      </group>
    </group>
  );
}
function CountdownScene() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const prevTime = useRef(timeLeft);

  useEffect(() => {
    const targetDate = new Date("2025-03-15T09:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4f90ff" />
      <pointLight position={[0, 0, 5]} intensity={0.8} color="#4f90ff" />

      <group>
        <NumberCube
          number={String(timeLeft.days).padStart(2, "0")}
          position={[-6, 0, 0]}
          shouldRotate={
            timeLeft.hours === 23 &&
            timeLeft.minutes === 59 &&
            timeLeft.seconds === 59
          }
        />
        <NumberCube
          number={String(timeLeft.hours).padStart(2, "0")}
          position={[-2, 0, 0]}
          shouldRotate={timeLeft.minutes === 59 && timeLeft.seconds === 59}
        />
        <NumberCube
          number={String(timeLeft.minutes).padStart(2, "0")}
          position={[2, 0, 0]}
          shouldRotate={timeLeft.seconds === 59}
        />
        <NumberCube
          number={String(timeLeft.seconds).padStart(2, "0")}
          position={[6, 0, 0]}
          shouldRotate={prevTime.current.seconds !== timeLeft.seconds}
        />

        <Text position={[-6, -3, 0]} fontSize={0.6} color="#4f90ff">
          DAYS
        </Text>
        <Text position={[-2, -3, 0]} fontSize={0.6} color="#4f90ff">
          HOURS
        </Text>
        <Text position={[2, -3, 0]} fontSize={0.6} color="#4f90ff">
          MINUTES
        </Text>
        <Text position={[6, -3, 0]} fontSize={0.6} color="#4f90ff">
          SECONDS
        </Text>
      </group>
    </>
  );
}

const Countdown = () => {
  return (
    <div className={styles.countdown}>
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }} dpr={[1, 2]}>
        <CountdownScene />
      </Canvas>
    </div>
  );
};

export default Countdown;
