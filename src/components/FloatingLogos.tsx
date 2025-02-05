import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, useGLTF } from "@react-three/drei";

const LogoModel = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

const FloatingLogos = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} className="absolute top-0 left-0 w-full h-full">
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <LogoModel modelPath="/src/models/typescript.png" />
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <LogoModel modelPath="/src/models/typescript.png" />
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <LogoModel modelPath="/src/models/typescript.png" />
      </Float>
    </Canvas>
  );
};

export default FloatingLogos;
