import { useGLTF } from '@react-three/drei'

export default function Table(props) {
  const { nodes, materials } = useGLTF('./gaming_table.glb')
  return (
    <group scale={1.6} position={[0,-5,-4.2]} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_Material_0.geometry}
          material={materials.Material}
          position={[-156.236, 141.614, 118.337]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.696}
        />
      </group>
    </group>
  )
}


useGLTF.preload('./gaming_table.glb')
