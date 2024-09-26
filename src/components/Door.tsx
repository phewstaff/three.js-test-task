import React, { useRef } from 'react'
import { Mesh  } from 'three'
import { useControls } from 'leva'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'

export const Door: React.FC = () => {
  const meshRef = useRef<Mesh>(null)

  const { width, height } = useControls('Door Dimensions', {
    width: {
      value: 1,
      min: 0.5,
      max: 3,
      step: 0.1,
    },
    height: {
      value: 2,
      min: 1,
      max: 4,
      step: 0.1,
    },
  })

  const woodTexture = useLoader(TextureLoader, '/assets/wood.jpg')

  woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping
  woodTexture.repeat.set(1, 1)

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      position={[0, height / 2, 0]}
    >
      <boxGeometry args={[width, height, 0.1]} />
      <meshStandardMaterial
        map={woodTexture}
        metalness={0.4}
        roughness={0.8}
        envMapIntensity={1}
      />
    </mesh>
  )
}
