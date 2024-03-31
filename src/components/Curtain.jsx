import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Curtain(props) {
  const { nodes, materials } = useGLTF('./models/curtain.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.polySurface1073_curtains_0.geometry}
        material={materials.cloth}
        position={nodes.polySurface1073_curtains_0.position}
      />
      <mesh
        geometry={nodes.pCylinder70_metal_0.geometry}
        material={materials.metal}
        position={nodes.pCylinder70_metal_0.position}
      />
      <mesh
        geometry={nodes.polySurface1073_metal_0.geometry}
        material={materials.metal}
        position={nodes.polySurface1073_metal_0.position}
      />
    </group>
  )
}

useGLTF.preload('./models/curtain.glb')
