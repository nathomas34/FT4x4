import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Html,
} from '@react-three/drei';
import Vehicle from './Vehicle';
import { PenTool as Tool, Wrench, Truck, Package } from 'lucide-react';

type Accessory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  installed: boolean;
};

export default function Configurator3D() {
  const [accessories, setAccessories] = useState<Accessory[]>([
    {
      id: 'plateau',
      name: 'Plateau de base',
      icon: <Truck size={24} />,
      installed: true,
    },
    {
      id: 'toolbox',
      name: 'Boîte à outils',
      icon: <Tool size={24} />,
      installed: false,
    },
    {
      id: 'winch',
      name: 'Treuil avant',
      icon: <Wrench size={24} />,
      installed: false,
    },
    {
      id: 'storage',
      name: 'Coffre de rangement',
      icon: <Package size={24} />,
      installed: false,
    },
  ]);

  const toggleAccessory = (id: string) => {
    setAccessories(
      accessories.map((acc) =>
        acc.id === id ? { ...acc, installed: !acc.installed } : acc
      )
    );
  };

  return (
    <div className="w-full h-[600px] relative bg-gray-900 rounded-lg overflow-hidden border border-red-600/20">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 4, 8]} />
        <OrbitControls
          enablePan={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={4}
          maxDistance={12}
          target={[0, 0, 0]}
        />
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Suspense
          fallback={
            <Html center>
              <div className="text-white">Chargement du modèle...</div>
            </Html>
          }
        >
          <Vehicle accessories={accessories} />
        </Suspense>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </Canvas>

      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-red-500 mb-4">
            Personnalisez votre Toyota Hilux
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {accessories.map((acc) => (
              <button
                key={acc.id}
                onClick={() => toggleAccessory(acc.id)}
                className={`flex items-center justify-center space-x-2 p-3 rounded-lg transition-colors ${
                  acc.installed
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {acc.icon}
                <span>{acc.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
