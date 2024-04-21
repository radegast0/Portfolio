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
		uColorEnd: new THREE.Color('#912BBC'),
	},
	portalVertexShader,
	portalFragmentShader
);

extend({ TvScreenMaterial });

export default function TvScreen(props) {
	const tvScreenMaterial = useRef();
	useFrame((state, delta) => {
		tvScreenMaterial.current.uTime = state.clock.elapsedTime * 0.5;
	});
	const { nodes, materials } = useGLTF('./models/tvScreen.glb');
	return (
		<group
			{...props}
			dispose={null}
		>
			<mesh
				geometry={nodes.tvScreen.geometry}
				material={nodes.tvScreen.material}
                position={nodes.tvScreen.position}
                scale={nodes.tvScreen.scale}
                rotation={nodes.tvScreen.rotation}
			>
				<tvScreenMaterial ref={tvScreenMaterial} />
			</mesh>
		</group>
	);
}

useGLTF.preload('./models/tvScreen.glb');
