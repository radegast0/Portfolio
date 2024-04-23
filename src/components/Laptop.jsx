import React, { useRef, useState } from 'react';
import { Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import AboutIndex from '../html/AboutIndex';

const Laptop = React.forwardRef(({ isAbout }, ref) => {
	const { nodes, materials } = useGLTF('./models/laptop.glb');
	const laptopPositionRef = useRef(
		new THREE.Vector3(-1.34186137, 2.31492853, -5.63775015)
	);
	return (
		<group dispose={null}>
			<group
				position={laptopPositionRef.current.toArray()}
				rotation={[-Math.PI, 1.31913011, -Math.PI]}
				scale={[0.34308976, 0.3430897, 0.34308976]}
			>
				<Html
					style={{
						height: '100vh',
					}}
					scale={[0.15, 0.151, 0.15]}
					transform
					position={[0, 0.515, -1.2555]}
					rotation-x={-Math.PI / 18}
					occlude
				>
					{isAbout ? <AboutIndex /> : null}
				</Html>
				<mesh
					twoSided={false}
					geometry={nodes.Object_0006.geometry}
					material={materials['case']}
				/>
				<mesh
					geometry={nodes.Object_0006_1.geometry}
					material={materials.slots_1}
				/>
				<mesh
					geometry={nodes.Object_0006_2.geometry}
					material={materials.speaker}
				/>
				<mesh
					geometry={nodes.Object_0006_3.geometry}
					material={materials.bezel}
				/>
				<mesh
					geometry={nodes.Object_0006_4.geometry}
					material={materials.slots_2}
				/>
				<mesh
					geometry={nodes.Object_0006_5.geometry}
					material={materials.shiny_parts}
				/>
			</group>
		</group>
	);
});

export default Laptop;
useGLTF.preload('./models/laptop.glb');
