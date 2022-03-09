import { useMemo, useRef } from "react"
import * as THREE from "three"
import Material from "./Material"

const Sphere = () => {
  const ref = useRef()

  const [vertices, indices] = useMemo(() => {
    const model = new THREE.Mesh(
      new THREE.IcosahedronBufferGeometry(1, 64),
      new THREE.MeshBasicMaterial({})
    )

    const vertices = model.geometry.attributes.position.array

    const numVertices = vertices.length / 3
    const indices = new Uint16Array(numVertices)

    for (let i = 0; i < numVertices; i++) {
      indices[i] = i
    }

    return [vertices, indices]
  }, [])

  return (
    <group>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={vertices.length / 3}
            array={vertices}
            itemSize={3}
          />
          <bufferAttribute
            attach='pindex'
            array={indices}
            count={indices.length}
            itemSize={1}
          />
        </bufferGeometry>
        <Material />
      </points>
    </group>
  )
}

export default Sphere
