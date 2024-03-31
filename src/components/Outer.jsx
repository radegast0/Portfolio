import { useGLTF, useTexture } from "@react-three/drei"

export default function Outer () {

    const { nodes } = useGLTF('./models/outer.glb')
    const root = './assets/outer-baked-v4.jpg'
    const bakedTexture = useTexture(root)



  return (
    <>
        <mesh position={nodes.Cube.position} geometry={nodes.Cube.geometry} scale={nodes.Cube.scale} rotation={nodes.Cube.rotation} >
            <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
    </>
  )
}


