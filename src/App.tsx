import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment } from './Environment'
import { Door } from './components/Door'
import { Box } from './components/Box'
import { Sphere } from './components/Sphere'
import { OrbitControls } from '@react-three/drei'
import { Floor } from './components/Floor'
import { Suspense } from 'react'
import { Loader } from './components/Loader'

function App() {
    return (
        <Canvas shadows camera={{ position: [5, 5, 5], fov: 60 }}>
            <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[5, 10, 7.5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <Environment />
                <Box />
                <Sphere />
                <Door />
                <Floor />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
        </Canvas>
    )
}

export default App
