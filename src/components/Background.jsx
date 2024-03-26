import {
	useGLTF,
	useTexture,
	PerspectiveCamera,
	OrbitControls,
} from '@react-three/drei';
import GuitarSofa from './GuitarSofa';
import Logos from './Logos';

const Background = () => {
	const { nodes } = useGLTF('/models/room-baked.glb');
	const logos = useGLTF('/models/logos-book.glb');

	const bakedTexture = useTexture('/models/room-baked.jpg');

	return (
		<>
			<color
				args={['#030202']}
				attach="background"
			/>
			<ambientLight intensity={1.5} />
			<PerspectiveCamera
				makeDefault
				position={[8, 12, 20]}
			/>

			<OrbitControls
				maxDistance={35}
				maxPolarAngle={Math.PI / 2.4}
				minPolarAngle={Math.PI / 8}
				minAzimuthAngle={-Math.PI / 2.4}
				maxAzimuthAngle={Math.PI / 2.4}
				enablePan={false}
			/>

			<mesh geometry={nodes.baked.geometry}>
				<meshBasicMaterial
					map={bakedTexture}
					map-flipY={false}
				/>
			</mesh>
			<mesh
				geometry={nodes.tvScreen.geometry}
				position={nodes.tvScreen.position}
				rotation={nodes.tvScreen.rotation}
				scale={nodes.tvScreen.scale}
			/>
			<mesh
				geometry={nodes.pcScreen.geometry}
				position={nodes.pcScreen.position}
				rotation={nodes.pcScreen.rotation}
				scale={nodes.pcScreen.scale}
			/>
			<mesh
				geometry={nodes.shelfLight.geometry}
				position={nodes.shelfLight.position}
				rotation={nodes.shelfLight.rotation}
				scale={nodes.shelfLight.scale}
			/>
			<mesh
				geometry={nodes.lampBulb.geometry}
				position={nodes.lampBulb.position}
				rotation={nodes.lampBulb.rotation}
				scale={nodes.lampBulb.scale}
			/>

			<GuitarSofa />
			<Logos />
		</>
	);
};

export default Background;
