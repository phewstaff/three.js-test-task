import React from 'react'

export const Sphere: React.FC = () => {
  return (
    <mesh position={[2, 1, 0]} castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#0000ff" metalness={0.7} roughness={0.3} />
    </mesh>
  )
}