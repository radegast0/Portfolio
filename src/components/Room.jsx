import { useGLTF, useTexture } from '@react-three/drei';

const Room = () => {
	const { nodes } = useGLTF('./models/room.glb');
	const bakedTexture = useTexture('/assets/room-baked-v4.jpg');

	return (
		<>	
			<mesh position={nodes.mergedV5.position}
				geometry={nodes.mergedV5.geometry}
				castShadow
			>
				<meshBasicMaterial

					map={bakedTexture}
					map-flipY={false}
				/>
			</mesh>
			<mesh position={nodes.frameLight.position} geometry={nodes.frameLight.geometry} scale={nodes.frameLight.scale} rotation={nodes.frameLight.rotation} />
			<mesh position={nodes.lampBulb.position} geometry={nodes.lampBulb.geometry} scale={nodes.lampBulb.scale} rotation={nodes.lampBulb.rotation} />
			<mesh position={nodes.pcScreen.position} geometry={nodes.pcScreen.geometry} scale={nodes.pcScreen.scale} rotation={nodes.pcScreen.rotation} />
			<mesh position={nodes.shelfLight.position} geometry={nodes.shelfLight.geometry} scale={nodes.shelfLight.scale} rotation={nodes.shelfLight.rotation} />
			<mesh position={nodes.tvScreen.position} geometry={nodes.tvScreen.geometry} scale={nodes.tvScreen.scale} rotation={nodes.tvScreen.rotation} />
		</>
	);
};

export default Room;
