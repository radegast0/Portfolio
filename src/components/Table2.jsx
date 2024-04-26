/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Table2(props) {
  const { nodes, materials } = useGLTF('./models/table2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.297, 0.329, -4.435]}>
        <mesh
          geometry={nodes.polySurface593_sofa_0_1.geometry}
        >
          <meshBasicMaterial
            attach="material"
            color="#000000"
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
        <mesh
          geometry={nodes.polySurface593_sofa_0_2.geometry}
        >
          <meshStandardMaterial
            attach="material"
            color="#413A6F"
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/table2.glb')