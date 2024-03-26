import { useGLTF } from '@react-three/drei'

export default function Laptop(props) {
  const { nodes, materials } = useGLTF('./models/laptop.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface437_metal_0.geometry}
        material={materials.metal}
        position={[-5.297, 0.267, -4.435]}
      />
    </group>
  )
}

useGLTF.preload('./models/laptop.glb')
