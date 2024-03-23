import {
	Stage,
	PerspectiveCamera,
	CameraControls,
	Environment,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import Guitar from './Guitar';
import Room from './Room';

const Background = () => {
	// Load the model
	const camera = useThree();	

	const { size, mouse } = useThree();
	const groupRef = useRef();

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			// update camera
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [camera]);

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
			{/* <directionalLightHelper args={[dirLight.current, 0.2]} /> */}
			{/* OrbitControls */}
			<Environment preset='forest' />
			<ambientLight intensity={0.5} />
			<CameraControls
				maxAzimuthAngle={Math.PI / 4}
				minAzimuthAngle={-Math.PI / 4}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 4}
				maxDistance={5}
			/>
			<PerspectiveCamera
				fov={60}
				aspect={window.innerWidth / window.innerHeight}
				makeDefault
				position={[0, 1.5, 1.5]}
			/>
			<group
				castShadow
				receiveShadow
				ref={groupRef}
			>
				{/* Custom Models here */}
				<Guitar />
				<Room />
			</group>
		</>
	);
};

export default Background;
