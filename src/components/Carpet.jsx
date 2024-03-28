
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Carpet(props) {
  const model = useGLTF('./models/carpet.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.25, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          side={THREE.FrontSide}
          receiveShadow
          geometry={model.nodes['Carpet1_Material_#26_0'].geometry}
          material={model.materials.Material_26}
          position={[-0.977, 1.305, 0.026]}
          rotation={[0, 0, 0.561]}
        />
      </group>
    </group>
  )
}


useGLTF.preload('./models/carpet.glb')
