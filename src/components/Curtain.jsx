import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Curtain(props) {
  const { nodes, materials } = useGLTF('./models/curtain.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.polySurface1073_curtains_0.geometry}
        material={materials.cloth}
        position={[-7.75312376, -0.01647288, -4.71006536]}
      />
      <mesh
        geometry={nodes.pCylinder70_metal_0.geometry}
        material={materials.metal}
        position={[-7.75312376, -0.01647288, -4.71006536]}
      />
      <mesh
        geometry={nodes.polySurface1073_metal_0.geometry}
        material={materials.metal}
        position={[-7.75312376, -0.01647288, -4.71006536]}
      />
    </group>
  )
}

useGLTF.preload('./models/curtain.glb')
