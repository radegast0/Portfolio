import {
	PerspectiveCamera,
	CameraControls,
	Environment,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import Guitar from './Guitar';
import Room from './Room';
import CustomEnv from './CustomEnv';

const Background = () => {
	// Load the model
	const camera = useThree();

	const { size, mouse } = useThree();
	const groupRef = useRef();

	useFrame(() => {
		// Calculate rotation based on mouse position
		const mouseX = (mouse.x * size.width) / 32;
		const mouseY = (mouse.y * size.height) / 128;
		const targetRotationX = (mouseX / size.width) * Math.PI;
		const targetRotationY = -(mouseY / size.height) * Math.PI;

		// Rotate the mesh
		groupRef.current.rotation.x +=
			(targetRotationY - groupRef.current.rotation.x) * 0.01;
		groupRef.current.rotation.y +=
			(targetRotationX - groupRef.current.rotation.y) * 0.05;
	});
	console.log(window.innerHeight, window.innerWidth);

	return (
		<>
			{/* OrbitControls */}
			<Environment preset="forest" />

			<CameraControls
				maxAzimuthAngle={Math.PI / 4}
				minAzimuthAngle={-Math.PI / 4}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 4}
				maxDistance={5}
				truckSpeed={0.2}
				dispose={null}
			/>
			<PerspectiveCamera
				fov={75}
				aspect={window.innerWidth / window.innerHeight}
				makeDefault
				position={[0, 1.5, 1.5]}
			/>

			<group ref={groupRef}>
				<CustomEnv />
				{/* Custom Models here */}
				<Guitar />
				<Room />
			</group>
		</>
	);
};

export default Background;
