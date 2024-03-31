import { useGLTF } from '@react-three/drei'

export default function Guitar(props) {
  const { nodes, materials } = useGLTF('./models/guitar.glb')
  return (
    <group position={[-0.1,0,0]} {...props} dispose={null}>
      <group position={[0, 0.264, -12.841]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.028, -0.003, 0.256]} rotation={[-Math.PI / 2, 0, 0.495]}>
            <mesh
              geometry={nodes.Guitar_Stand_Guitar_Stand_0.geometry}
              material={materials.Guitar_Stand}
              position={nodes.Guitar_Stand_Guitar_Stand_0.position}
              rotation={nodes.Guitar_Stand_Guitar_Stand_0.rotation}
            />
          </group>
        </group>
      </group>
      <group position={[0, 0.264, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-12.968, -5.228, -39.37]}>
          <mesh
            geometry={nodes.Object_3001.geometry}
            material={materials['Gibson_A1_LOD001_Mat.001']}
            position={nodes.Object_3001.position}
            rotation={nodes.Object_3001.rotation}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/guitar.glb')
