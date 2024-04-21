import { useGLTF, useTexture, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend, useFrame } from '@react-three/fiber';
import portalVertexShader from '../shaders/tv/vertex.glsl';
import portalFragmentShader from '../shaders/tv/fragment.glsl';
import { useRef } from 'react';

const TvScreenMaterial = shaderMaterial(
	{
		uTime: 0,
		uColorStart: new THREE.Color('#ffffff'),
		uColorEnd: new THREE.Color('#000000'),
	},
	portalVertexShader,
	portalFragmentShader
);

extend({ TvScreenMaterial });

const Room = () => {
	const tvScreenMaterial = useRef();
	useFrame((state, delta)=>{
		tvScreenMaterial.current.uTime = state.clock.elapsedTime * 0.5;
	})
	const { nodes } = useGLTF('./models/room.glb');
	const bakedTexture = useTexture('/assets/room-baked-v4.jpg');

	return (
		<>
			<mesh
				position={nodes.mergedV5.position}
				geometry={nodes.mergedV5.geometry}
				castShadow
			>
				<meshBasicMaterial
					map={bakedTexture}
					map-flipY={false}
				/>
			</mesh>
			<mesh
				position={nodes.frameLight.position}
				geometry={nodes.frameLight.geometry}
				scale={nodes.frameLight.scale}
				rotation={nodes.frameLight.rotation}
			/>
			<mesh
				position={nodes.lampBulb.position}
				geometry={nodes.lampBulb.geometry}
				scale={nodes.lampBulb.scale}
				rotation={nodes.lampBulb.rotation}
			/>
			<mesh
				position={nodes.pcScreen.position}
				geometry={nodes.pcScreen.geometry}
				scale={nodes.pcScreen.scale}
				rotation={nodes.pcScreen.rotation}
			/>
			<mesh
				position={nodes.shelfLight.position}
				geometry={nodes.shelfLight.geometry}
				scale={nodes.shelfLight.scale}
				rotation={nodes.shelfLight.rotation}
			/>
			<mesh
				position={nodes.tvScreen.position}
				geometry={nodes.tvScreen.geometry}
				scale={nodes.tvScreen.scale}
				rotation={nodes.tvScreen.rotation}
			>
				<tvScreenMaterial ref={tvScreenMaterial} />
			</mesh>
		</>
	);
};

export default Room;
