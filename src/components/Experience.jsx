import {
	useGLTF,
	useTexture,
	PerspectiveCamera,
	OrbitControls,
	Stage,
} from '@react-three/drei';
import Room from './Room';
import Carpet from './Carpet';
import { Guitar } from './Guitar';
import Logos from './Logos';
import { Book } from './Book';
import Laptop from './Laptop';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Experience = () => {
	const [distance, setDistance] = useState();
	const perspectiveCameraRef = useRef();
	const orbitControlsRef = useRef();

	useEffect(() => {
		const updateMaxDistance = () => {
			const maxDistance = window.innerWidth > 1280 ? 35 : 45;
			setDistance(maxDistance); // Update the distance state
		};
		updateMaxDistance();
		window.addEventListener('resize', updateMaxDistance);

		return () => {
			window.removeEventListener('resize', updateMaxDistance);
		};
	}, []);
	


	return (
		<>
			<color
				args={['#030202']}
				attach="background"
			/>
			<PerspectiveCamera
				ref={perspectiveCameraRef}
				makeDefault
				position={[8, 12, 20]}
			/>
			<ambientLight intensity={1} />
			<directionalLight
				position={[0, 10, 0]}
				intensity={3}
			/>

			<OrbitControls
				ref={orbitControlsRef}
				camera={perspectiveCameraRef.current}
				maxDistance={distance}
				minDistance={7}
				maxPolarAngle={Math.PI / 2.4}
				minPolarAngle={Math.PI / 8}
				minAzimuthAngle={-Math.PI / 1.5}
				maxAzimuthAngle={Math.PI / 1}
				enablePan={false}
			/>

			<Room />
			<Carpet />
			<Guitar />
			<Logos />
			<Book />
			<Laptop />
		</>
	);
};

export default Experience;
