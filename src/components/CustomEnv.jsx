import { useRef } from 'react';
import * as THREE from 'three';
import {
	BakeShadows,
	Environment,
	useHelper,
} from '@react-three/drei';


const CustomEnv = () => {
	//light helper
	const directionalLight = useRef();
	const pointLight = useRef();
	const spotLight = useRef();

	useHelper(directionalLight, THREE.DirectionalLightHelper, 1);
	useHelper(pointLight, THREE.PointLightHelper, 1);
	useHelper(spotLight, THREE.SpotLightHelper, 1);

	return (
		<group
			rotation={[0, -Math.PI / 15, 0]}
			position={[1.5, 2.8, -5.5]}
		>
			<mesh>
				<planeGeometry args={[10, 10]} />
				<meshStandardMaterial color="red" />
			</mesh>
			<mesh
				rotation={[0, -Math.PI / 2, 0]}
				position={[5, 0, 10]}
			>
				<planeGeometry args={[20, 10]} />
				<meshStandardMaterial color="green" />
			</mesh>
			<mesh
				rotation={[0, Math.PI / 2, 0]}
				position={[-5, 0, 10]}
			>
				<planeGeometry args={[20, 10]} />
				<meshStandardMaterial color="blue" />
			</mesh>
			<mesh
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, 5, 5]}
			>
				<planeGeometry args={[10, 10]} />
				<meshStandardMaterial color="cyan" />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -5, 10]}
			>
				<planeGeometry args={[10, 20]} />
				<meshStandardMaterial color="white" />
			</mesh>
			<pointLight ref={pointLight} shadow-camera-far={8}  shadow-normalBias={0.04} castShadow position={[0, -3, 4]}  intensity={15} scale={0.1} color='white' />

			<ambientLight intensity={0.5} />
			{/* <spotLight
				ref={spotLight}
				castShadow
				position={[3, 1, 5]}
				intensity={100}
				penumbra={1}
				angle={Math.PI / 4}
				shadow-normalBias={0.08}
			/> */}
			{/* <pointLight ref={pointLight} position={[-2, -4, 3]}  intensity={0.5} scale={0.1} color='white' /> */}
			<BakeShadows />
		</group>
	);
};

export default CustomEnv;
