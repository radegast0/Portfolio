import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Book(props) {
	const { nodes, materials } = useGLTF('/models/book.glb');
	return (
		<group
			{...props}
			dispose={null}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.polySurface941_guitar_0.geometry}
				material={materials.guitar}
				position={[-5.65, 0.366, 0.438]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.polySurface941_white_0.geometry}
				material={materials.white}
				position={[-5.65, 0.366, 0.438]}
			/>
		</group>
	);
}

useGLTF.preload('/models/book.glb');
