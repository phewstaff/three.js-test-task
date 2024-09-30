import * as THREE from 'three'
import { Vector3 } from 'three'

interface DoorHandleProps {
    doorWidth: number
    side: 'front' | 'back'
}

export const DoorHandle: React.FC<DoorHandleProps> = ({ doorWidth, side }) => {
    const platformWidth = 0.08
    const platformHeight = 0.25
    const platformDepth = 0.02
    const sphereRadius = 0.025

    const groupPosition: Vector3 = new THREE.Vector3(doorWidth / 2.5, 1, side === 'front' ? 0.05 : -0.05)

    const handlePositionZ = side === 'front' ? platformDepth / 2 + sphereRadius : -platformDepth / 2 - sphereRadius

    return (
        <group position={groupPosition}>
            {/* Platform */}
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
                <boxGeometry args={[platformWidth, platformHeight, platformDepth]} />
                <meshStandardMaterial color="silver" metalness={0.8} roughness={0.1} envMapIntensity={1} />
            </mesh>
            {/* Spherical Handle */}
            <mesh castShadow receiveShadow position={[0, 0, handlePositionZ]}>
                <sphereGeometry args={[sphereRadius, 32, 32]} />
                <meshStandardMaterial color="grey" metalness={0.6} roughness={0.4} />
            </mesh>
        </group>
    )
}
