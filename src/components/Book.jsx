import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Book(props) {
  const { nodes, materials } = useGLTF('./models/book.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.polySurface941_guitar_0.geometry}
        material={materials.guitar}
        position={nodes.polySurface941_guitar_0.position}
      />
      <mesh
        geometry={nodes.polySurface941_white_0.geometry}
        material={materials.white}
        position={nodes.polySurface941_white_0.position}
      />
    </group>
  )
}

useGLTF.preload('./models/book.glb')
