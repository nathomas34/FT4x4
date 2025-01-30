import { useEffect } from 'react';
import { BoxGeometry, MeshStandardMaterial, Group, Mesh } from 'three';

type VehicleProps = {
  accessories: {
    id: string;
    installed: boolean;
  }[];
};

export default function Vehicle({ accessories }: VehicleProps) {
  useEffect(() => {
    // Les accessoires seront gérés ici dans une future mise à jour
  }, [accessories]);

  return (
    <group rotation={[0, Math.PI / 4, 0]} position={[0, 0, 0]}>
      {/* Cabine */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[2, 1.2, 1.8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Capot */}
      <mesh position={[1.2, 0.4, 0]} castShadow>
        <boxGeometry args={[0.8, 0.8, 1.8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Plateau de base (toujours visible) */}
      <mesh position={[-1.2, 0.3, 0]} castShadow>
        <boxGeometry args={[2.4, 0.2, 1.8]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Bords du plateau */}
      <mesh position={[-1.2, 0.5, 0.9]} castShadow>
        <boxGeometry args={[2.4, 0.4, 0.1]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[-1.2, 0.5, -0.9]} castShadow>
        <boxGeometry args={[2.4, 0.4, 0.1]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[-2.4, 0.5, 0]} castShadow>
        <boxGeometry args={[0.1, 0.4, 1.8]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Roues */}
      <mesh position={[1, 0.3, 0.9]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[1, 0.3, -0.9]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-1.2, 0.3, 0.9]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-1.2, 0.3, -0.9]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Accessoires conditionnels */}
      {accessories.find(acc => acc.id === 'toolbox' && acc.installed) && (
        <mesh position={[-1.2, 0.7, 0]} castShadow>
          <boxGeometry args={[0.6, 0.4, 1]} />
          <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.3} />
        </mesh>
      )}

      {accessories.find(acc => acc.id === 'winch' && acc.installed) && (
        <mesh position={[1.7, 0.4, 0]} castShadow>
          <boxGeometry args={[0.3, 0.3, 0.8]} />
          <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.3} />
        </mesh>
      )}

      {accessories.find(acc => acc.id === 'storage' && acc.installed) && (
        <mesh position={[-2.2, 0.7, 0]} castShadow>
          <boxGeometry args={[0.4, 0.6, 1.4]} />
          <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.3} />
        </mesh>
      )}
    </group>
  );
}