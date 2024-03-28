import { useGLTF, useTexture } from '@react-three/drei';

const Room = () => {
	const { nodes } = useGLTF('/models/room-merged-v2.glb');

	const bakedTexture = useTexture('/models/room-baked-v2.jpg');

	return (
		<>
			<mesh
				position={nodes.baked.position}
				geometry={nodes.baked.geometry}
				castShadow
			>
				<meshBasicMaterial
					map={bakedTexture}
					map-flipY={false}
				/>
			</mesh>
			<mesh
				geometry={nodes.tvScreen.geometry}
				position={[
					nodes.tvScreen.position.x,
					nodes.tvScreen.position.y,
					nodes.tvScreen.position.z,
				]}
				rotation={nodes.tvScreen.rotation}
				scale={nodes.tvScreen.scale}
				castShadow
			/>
			<mesh
				geometry={nodes.pcScreen.geometry}
				position={[
					nodes.pcScreen.position.x,
					nodes.pcScreen.position.y,
					nodes.pcScreen.position.z,
				]}
				rotation={nodes.pcScreen.rotation}
				scale={nodes.pcScreen.scale}
				castShadow
			/>
			<mesh
				geometry={nodes.lampBulb.geometry}
				position={nodes.lampBulb.position}
				scale={nodes.lampBulb.scale}
				rotation={nodes.lampBulb.rotation}
				castShadow
			/>
			<mesh
				geometry={nodes.frameLight.geometry}
				position={[
					nodes.frameLight.position.x,
					nodes.frameLight.position.y,
					nodes.frameLight.position.z,
				]}
				scale={nodes.frameLight.scale}
				rotation={nodes.frameLight.rotation}
				castShadow
			/>
			<mesh
				geometry={nodes.shelfLight.geometry}
				position={[
					nodes.shelfLight.position.x,
					nodes.shelfLight.position.y,
					nodes.shelfLight.position.z,
				]}
				scale={nodes.shelfLight.scale}
				rotation={nodes.shelfLight.rotation}
				castShadow
			/>
		</>
	);
};

export default Room;
