import { useGLTF } from '@react-three/drei'

export default function Carpet(props) {
  const model = useGLTF('./models/carpet.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={model.nodes.Object_16.geometry}
        material={model.nodes.Object_16.material}
        position={model.nodes.Object_16.position}
        rotation={model.nodes.Object_16.rotation}
        scale={model.nodes.Object_16.scale}
      />
    </group>
  )
}

useGLTF.preload('./models/carpet.glb')
