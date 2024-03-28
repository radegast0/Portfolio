import { useGLTF } from '@react-three/drei'

export default function Amp(props) {
  const { nodes, materials } = useGLTF('./models/amp.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-8.102, 0.226, -2.679]} rotation={[0, 0.352, 0]}>
        <mesh geometry={nodes.pCylinder93_sofa1_0002_1.geometry} material={materials.SVGMat} />
        <mesh
          geometry={nodes.pCylinder93_sofa1_0002_2.geometry}
          material={materials['guitar.001']}
        />
        <mesh
          geometry={nodes.pCylinder93_sofa1_0002_3.geometry}
          material={materials['material_0.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/amp.glb')
