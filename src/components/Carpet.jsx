
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Carpet(props) {
  const { nodes, materials } = useGLTF('./models/carpet.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_16.geometry}
        material={nodes.Object_16.material}
        position={[nodes.Object_16.position.x, nodes.Object_16.position.y - 0.02, nodes.Object_16.position.z]}
        rotation={nodes.Object_16.rotation}
      />
    </group>
  )
}

useGLTF.preload('./models/carpet.glb')
