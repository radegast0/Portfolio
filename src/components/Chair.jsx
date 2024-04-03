import { useGLTF } from '@react-three/drei';

export default function Chair(props) {
	const { nodes, materials, position } = useGLTF('./models/chair.glb');
	return (
		<group
			{...props}
			dispose={null}
		>
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
