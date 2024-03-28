
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function WallLight(props) {
  const { nodes, materials } = useGLTF('./models/wallLight.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.gold_lambert3_0.geometry}
        material={materials.lambert3}
        position={nodes.gold_lambert3_0.position}
        rotation={nodes.gold_lambert3_0.rotation}
      />
    </group>
  )
}

useGLTF.preload('./models/wallLight.glb')