import { useGLTF } from '@react-three/drei'

export default function Laptop(props) {
  const { nodes, materials } = useGLTF('./models/laptop.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.442, 0.267, -4.435]}>
        <mesh geometry={nodes.polySurface437_metal_0.geometry} material={materials['SVGMat.009']} />
        <mesh
          geometry={nodes.polySurface437_metal_0_1.geometry}
          material={materials['3D_Oak_-_Semigloss.004']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/laptop.glb')
