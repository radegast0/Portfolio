import React, { useRef } from 'react';
import { Html, useGLTF } from '@react-three/drei';
import Annotation from './Annotation';

export default function Chair(props) {
	const { nodes, materials, position } = useGLTF('./models/chair.glb');
	return (
		<group
			{...props}
			dispose={null}
		>
			<Html
      center
        distanceFactor={8}
        occlude
				position={[nodes.polySurface576_cloth_0.position.x+5, nodes.polySurface576_cloth_0.position.y + 1, nodes.polySurface576_cloth_0.position.z-0.5]}
				wrapperClass="annotation"
			>
				<Annotation text="Click me!" />
			</Html>
			<mesh
				geometry={nodes.polySurface576_cloth_0.geometry}
				material={materials.cloth}
				position={nodes.polySurface576_cloth_0.position}
			/>
			<mesh
				geometry={nodes.polySurface576_metal_0.geometry}
				material={materials['Material.004']}
				position={nodes.polySurface576_metal_0.position}
			/>
		</group>
	);
}

useGLTF.preload('./models/chair.glb');
