import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import AboutIndex from '../html/AboutIndex';
import { Html } from '@react-three/drei';

export function LaptopScreen(props) {
	const { nodes, materials } = useGLTF('./models/laptopScreen.glb');
	return (
		<group
			{...props}
			dispose={null}
		>
			<mesh
				geometry={nodes.laptopScreen.geometry}
				position={[-1.805, 2.758, -5.52]}
				rotation={[-Math.PI, 1.319, -Math.PI]}
				scale={0.343}
			>
				<Html
					style={{
						height: '50vh',
					}}
					scale={[0.15, 0.151, 0.15]}
					transform
					position={[0, 0.1, -0.0174]}
					rotation-x={-Math.PI / 18}
					occlude
				>
					{/* {isAbout ? <AboutIndex /> : null} */}
					<AboutIndex />
				</Html>
			</mesh>
		</group>
	);
}
export default LaptopScreen;
useGLTF.preload('./models/laptopScreen.glb');
