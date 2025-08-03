import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Floating Geometry Component
function FloatingGeometry({ position, geometry, color, speed = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <MeshTransmissionMaterial
          color={color}
          thickness={0.2}
          roughness={0.1}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
          backside
        />
      </mesh>
    </Float>
  );
}

// Camera Equipment Model
function CameraModel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Camera Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.2, 1.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Lens */}
      <mesh position={[0, 0, 1]}>
        <cylinderGeometry args={[0.6, 0.8, 1.2, 16]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Viewfinder */}
      <mesh position={[0, 0.8, -0.3]}>
        <boxGeometry args={[0.8, 0.6, 0.8]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
}

// Particle System
function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 150;

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#ffffff"
        castShadow
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Floating Geometries */}
      <FloatingGeometry
        position={[-3, 2, 0]}
        geometry={<icosahedronGeometry args={[1]} />}
        color="#00ffff"
        speed={1}
      />
      <FloatingGeometry
        position={[3, -1, 2]}
        geometry={<octahedronGeometry args={[1.2]} />}
        color="#ff00ff"
        speed={0.8}
      />
      <FloatingGeometry
        position={[0, 3, -2]}
        geometry={<tetrahedronGeometry args={[1.5]} />}
        color="#ffaa00"
        speed={1.2}
      />
      <FloatingGeometry
        position={[-2, -2, -1]}
        geometry={<dodecahedronGeometry args={[0.8]} />}
        color="#aa00ff"
        speed={0.9}
      />

      {/* Camera Models */}
      <CameraModel position={[2, 0, 0]} />
      <CameraModel position={[-4, 1, -2]} />

      {/* Central 3D Text */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          position={[0, 0, 0]}
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          CREATIVE
          <MeshTransmissionMaterial
            color="#00ffff"
            thickness={0.3}
            roughness={0}
            transmission={0.9}
            ior={1.5}
            chromaticAberration={0.06}
            backside
          />
        </Text3D>
      </Float>

      {/* Particle System */}
      <ParticleSystem />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={5}
        maxDistance={15}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
    </>
  );
}

// Main Hero 3D Scene Component
const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;