import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mug(props) {
  const { nodes, materials } = useGLTF('./models/mug.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.757, 2.35, -4.158]} rotation={[0,Math.PI / 3, 0]} scale={0.12}>
        <mesh geometry={nodes.Mug1_Coffee_0_1.geometry} material={materials.Coffee} />
        <mesh geometry={nodes.Mug1_Coffee_0_2.geometry} material={materials.material} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/mug.glb')
