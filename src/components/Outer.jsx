import { useGLTF, useTexture } from "@react-three/drei"

export default function Outer () {

    const { nodes } = useGLTF('./models/outer.glb')
    const bakedTexture = useTexture('./assets/outer-baked-v4.jpg')
    useTexture.preload(bakedTexture)


  return (
    <>
        <mesh position={nodes.Cube.position} geometry={nodes.Cube.geometry} scale={nodes.Cube.scale} rotation={nodes.Cube.rotation} >
            <meshBasicMaterial map={bakedTexture} map-flipY={false} />
            
        </mesh>
        <mesh position={[2, 3, -8]}>
				<planeGeometry args={[4, 4]} />
				<meshBasicMaterial
					visible={false}
					side={2}
					color="red"
				/>
			</mesh>
			<mesh
				rotation-y={Math.PI / 2}
				position={[3.5, 3, -6]}
			>
				<planeGeometry args={[5,2]} />
				<meshBasicMaterial
					visible={false}
					side={2}
					color="blue"
				/>
			</mesh>
			<mesh
				rotation-y={Math.PI}
				position={[1, 3, -3.5]}
			>
				<planeGeometry args={[5,2]} />
				<meshBasicMaterial
					visible={false}
					side={2}
					color="hotpink"
				/>
			</mesh>
			<mesh
				rotation-x={-Math.PI / 2}
				position={[1, 4, -5.5]}
			>
				<planeGeometry args={[5,4]} />
				<meshBasicMaterial

					visible={false}
					side={2}
					color="green"
				/>
			</mesh>
    </>
  )
}


