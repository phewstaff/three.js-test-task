import React from 'react'

export const Box: React.FC = () => {
  return (
    <mesh position={[-2, 1, 0]} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00ff00" metalness={0.5} roughness={0.5} />
    </mesh>
  )
}