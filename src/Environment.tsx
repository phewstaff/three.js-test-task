import React from 'react'
import { Environment as EnvironmentImpl } from '@react-three/drei'

export const Environment: React.FC = () => {
  return (
    <EnvironmentImpl
      background
      files="./assets/venice_sunset_1k.hdr"
      ground={{ height: 10, radius: 100, scale: 100 }}
    />
  )
}