import {
	PerspectiveCamera,
	CameraControls,
	Environment,
	BakeShadows,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import Guitar from './Guitar';
import Room from './Room';
import CustomEnv from './CustomEnv';

const Background = () => {
	// Load the model

	const groupRef = useRef();

	return (
		<>
			{/* OrbitControls */}

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
