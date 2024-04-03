import {
	PerspectiveCamera,
	OrbitControls,
	Html,
	CameraControls,
	Box,
	Bounds,
} from '@react-three/drei';
import Room from './Room';
import Carpet from './Carpet';
import Logos from './Logos';
import Book from './Book';
import { useEffect, useRef, useState } from 'react';
import Annotation from './Annotation';
import Laptop from './Laptop';
import Amp from './Amp';
import WallLight from './WallLight';
import CameraPositionLogger from '../helpers/CameraPositionLogger';
import Outer from './Outer';
import Guitar from './Guitar';
import Curtain from './Curtain';
import { Mug } from './Mug';
import Chair from './Chair';
import { useThree } from '@react-three/fiber';
import { Box3 } from 'three';
import * as THREE from 'three';

const Experience = () => {
	const [distance, setDistance] = useState();
	const [panningSpeed, setPanningSpeed] = useState(0.4);
	const [bool, setBool] = useState(false);

	const { camera } = useThree();
	const cameraControlRef = useRef();

	useEffect(() => {
		const updateMaxDistance = () => {
			const maxDistance = window.innerWidth > 1280 ? 30 : 40;
			setDistance(maxDistance); // Update the distance state
		};
		updateMaxDistance();
		window.addEventListener('resize', updateMaxDistance);

		return () => {
			window.removeEventListener('resize', updateMaxDistance);
		};
	}, []);

	const boundingBox = new Box3(
		new THREE.Vector3(-8, 0, -8),
		new THREE.Vector3(8, 10, 8)
	);

	

	cameraControlRef.current?.setBoundary(boundingBox);

	
	return (
		<>
			<color
				args={['#030202']}
				attach="background"
			/>

			<ambientLight intensity={1.5} />
			<directionalLight
				intensity={3}
				position={[0, 5, 1]}
			/>
			<CameraControls
				boundary={boundingBox}
				ref={cameraControlRef}
				dollySpeed={0.4}
				maxDistance={distance}
				minDistance={4}
				maxPolarAngle={Math.PI / 2.4}
				minPolarAngle={Math.PI / 8}
				minAzimuthAngle={-Math.PI / 1}
				maxAzimuthAngle={Math.PI / 1}
				truckSpeed={1}
			/>
			<OrbitControls enabled={false} />
			<PerspectiveCamera
				makeDefault
				position={[8, 12, 15]}
				fov={60}
				near={0.01}
				far={100}
			/>

			{/* <CameraPositionLogger event='mousedown' /> */}
			<group>
				{/* <Room />
				<Carpet />
				<Guitar />
				<Logos />
				<Book />
				<Laptop />
				<Amp />
				<WallLight /> */}
				<Chair />
				<Mug />
				<Book />
				<Curtain />
				<Logos />
				<Guitar />
				<Carpet />
				<WallLight />
				<Amp />
				<Laptop />
				<Room />
			</group>
			<Outer />
		</>
	);
};

export default Experience;
