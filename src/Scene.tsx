import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Sphere from "./Sphere"
import * as THREE from "three"
import { Suspense } from "react"

const Scene = () => {
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor(0xef626c, 1)
        gl.toneMapping = THREE.NoToneMapping
      }}
    >
      <OrbitControls />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
    </Canvas>
  )
}

export default Scene
