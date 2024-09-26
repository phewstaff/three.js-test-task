import React from 'react'

const FLOOR_ROTATION_X = -Math.PI / 2

export const Floor: React.FC = () => {
  return (
    <mesh rotation={[FLOOR_ROTATION_X, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#808080" />
    </mesh>
  )
}