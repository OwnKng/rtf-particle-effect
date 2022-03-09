import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import { ShaderMaterial } from "three"
import { fragment } from "./shaders/fragment"
import { vertex } from "./shaders/vertex"

const Material = () => {
  const ref = useRef<ShaderMaterial>(null!)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
    }),
    []
  )

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    ref.current.uniforms.uTime.value = elapsedTime
  })

  return (
    <shaderMaterial
      ref={ref}
      uniforms={uniforms}
      vertexShader={vertex}
      fragmentShader={fragment}
    />
  )
}

export default Material
