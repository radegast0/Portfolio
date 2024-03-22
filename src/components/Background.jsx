import {
	Plane,
	Stage,
	Stars,
	PerspectiveCamera,
	OrbitControls,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import Guitar from './Guitar';

const Background = () => {

	// Load the model
	


	const { size, mouse } = useThree();
	const groupRef = useRef();

	useFrame(() => {
		// Calculate rotation based on mouse position
		const mouseX = (mouse.x * size.width) / 32;
		const mouseY = (mouse.y * size.height) / 64;
		const targetRotationX = (mouseX / size.width) * Math.PI;
		const targetRotationY = -(mouseY / size.height) * Math.PI;

		// Rotate the mesh
		groupRef.current.rotation.x +=
			(targetRotationY - groupRef.current.rotation.x) * 0.01;
		groupRef.current.rotation.y +=
			(targetRotationX - groupRef.current.rotation.y) * 0.05;
	});


	return (
		<>
			<PerspectiveCamera
				makeDefault
				position={[0, 0, 10]}
			/>
			{/* OrbitControls */}
			<OrbitControls
				enablePan={false}
				maxDistance={30}
				minPolarAngle={Math.PI / 4}
				maxPolarAngle={Math.PI / 2}
				minAzimuthAngle={-Math.PI / 3}
				maxAzimuthAngle={Math.PI / 3}
			/>
			<Stage
				environment="apartment"
				makeDefault
				adjustCamera
				shadows={false}
			/>
			<Stars
				saturation={1}
				fade
				speed={1.5}
			/>
			<group ref={groupRef}>
				<Plane
					args={[10, 10]}
					position={[0, 0, -6]}
				>
					<meshBasicMaterial color={'hotpink'} />
				</Plane>
				<Plane
					args={[10, 10]}
					position={[5, 0, -1]}
					rotation={[0, -Math.PI / 2, 0]}
				>
					<meshBasicMaterial color={'red'} />
				</Plane>
				<Plane
					args={[10, 10]}
					position={[-5, 0, -1]}
					rotation={[0, Math.PI / 2, 0]}
				>
					<meshBasicMaterial color={'green'} />
					{/* side={THREE.DoubleSide} */}
				</Plane>
				<Plane
					args={[10, 10]}
					position={[0, 5, -1]}
					rotation={[Math.PI / 2, 0, 0]}
				>
					<meshBasicMaterial color={'blue'} />
				</Plane>
				<Plane
					args={[10, 10]}
					position={[0, -5, -1]}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<meshBasicMaterial color={'yellow'} />
				</Plane>
				{/* Custom Model here */}
				<Guitar />
			</group>
		</>
	);
};

export default Background;
