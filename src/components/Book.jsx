import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Book(props) {
  const { nodes, materials } = useGLTF('./models/book.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.polySurface941_guitar_0.geometry}
        material={materials.guitar}
        position={[-5.64962339, 0.36557257, 0.43780971]}
      />
      <mesh
        geometry={nodes.polySurface941_white_0.geometry}
        material={materials.white}
        position={[-5.65105963, 0.36557257, 0.43780971]}
      />
    </group>
  )
}

useGLTF.preload('./models/book.glb')
