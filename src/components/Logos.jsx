import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export default function Logos(props) {
  const { nodes, materials } = useGLTF('./models/logos.glb')
  const threejs = useRef()
  const nodejs = useRef()

  return (
    <group {...props} dispose={null}>
      <group position={[-5.573, 2.63, -7.695]} rotation={[1.274, 0, 0]}>
        <mesh geometry={nodes.Curve001.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Curve001_1.geometry} material={materials['Material.005']} />
      </group>
      <group position={[-5.739, 2.342, -6.83]} rotation={[0, -0.502, 0]}>
        <mesh geometry={nodes.Curve011.geometry} material={materials.white2} />
        <mesh geometry={nodes.Curve011_1.geometry} material={materials.blue} />
      </group>
      <group position={[-7.37, 2.347, -6.542]} rotation={[0, 1.062, 0]} scale={[0.67, 0.813, 0.67]}>
        <mesh geometry={nodes.Curve014.geometry} material={materials.blue} />
        <mesh geometry={nodes.Curve014_1.geometry} material={materials['Material.007']} />
      </group>
      <mesh
        ref={nodejs}
        geometry={nodes.nodejs.geometry}
        material={materials.flower}
        position={[-4.409, 2.599, -7.042]}
        rotation={[1.055, -0.096, -1.404]}
      />
      <mesh
        geometry={nodes.react001.geometry}
        material={materials.blue}
        position={[-6.172, 2.555, -7.435]}
        rotation={[0, -1.105, 0]}
      />
      <mesh
        ref={threejs}
        geometry={nodes.threejs.geometry}
        material={materials['material_0.001']}
        position={nodes.threejs.position}
        rotation={nodes.threejs.rotation}
        scale={nodes.threejs.scale}
      />
      <group
        position={[-7.186, 2.345, -4.44]}
        rotation={[-Math.PI, 0.361, -Math.PI]}
        scale={[2.959, 1.078, 2.959]}>
        <mesh geometry={nodes.Curve003.geometry} material={materials['curtains.001']} />
        <mesh geometry={nodes.Curve003_1.geometry} material={materials['SVGMat.008']} />
      </group>
      <mesh
        geometry={nodes.git.geometry}
        material={materials['SVGMat.006']}
        position={nodes.git.position}
        rotation={nodes.git.rotation}
        scale={68.49}
      />
      <mesh
        geometry={nodes.github.geometry}
        material={materials['SVGMat.010']}
        position={[-6.838, 2.294, -6.947]}
        rotation={[0, 0.348, 0]}
        scale={2.398}
      />
    </group>
  )
}

useGLTF.preload('./models/logos.glb')
