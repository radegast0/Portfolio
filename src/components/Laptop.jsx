import React, { useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import AboutIndex from './AboutIndex';

export default function Laptop(props) {
  const { nodes, materials } = useGLTF('./models/laptop.glb')
  const laptopPositionRef = useRef(new THREE.Vector3(-1.34186137, 2.31492853, -5.63775015));
  const [distance, setDistance] = useState(0)
  console.log(distance);

  return (
    <group {...props} dispose={null}>
      <group
        position={laptopPositionRef.current.toArray()}
        rotation={[-Math.PI, 1.31913011, -Math.PI]}
        scale={[0.34308976, 0.3430897, 0.34308976]}>
          <Html
          transform
          distanceFactor={1.5}
          position={[0, 1.29, -1.39]}
          rotation-x={-Math.PI / 18}
          occlude
          > 
          <div className='text-black w-[900px] h-[490px] touch-pan-y '>
            <AboutIndex />
          </div>
          </Html>
        <mesh twoSided={false} geometry={nodes.Object_0006.geometry} material={materials['case']} />
        <mesh geometry={nodes.Object_0006_1.geometry} material={materials.slots_1} />
        <mesh geometry={nodes.Object_0006_2.geometry} material={materials.speaker} />
        <mesh geometry={nodes.Object_0006_3.geometry} material={materials.bezel} />
        <mesh geometry={nodes.Object_0006_4.geometry} material={materials.slots_2} />
        <mesh geometry={nodes.Object_0006_5.geometry} material={materials.shiny_parts} />
      </group>

    </group>
  )
}

useGLTF.preload('./models/laptop.glb')
