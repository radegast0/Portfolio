import {
	PerspectiveCamera,
	CameraControls,
	Bounds,
	Html,
	OrbitControls,
} from '@react-three/drei';
import Room from './Room';
import Carpet from './Carpet';
import Logos from './Logos';
import Book from './Book';
import { useEffect, useRef, useState } from 'react';
import Laptop from './Laptop';
import Amp from './Amp';
import WallLight from './WallLight';
import Outer from './Outer';
import Guitar from './Guitar';
import Curtain from './Curtain';
import { Mug } from './Mug';
import Chair from './Chair';
import { Box3 } from 'three';
import * as THREE from 'three';
import Annotations from './Annotations';
import SelectToZoom from './SelectToZoom';

const Experience = () => {
	const camera = useRef();

	const cameraControlRef = useRef();

	const boundingBox = new Box3(
		new THREE.Vector3(-8, 0, -8),
		new THREE.Vector3(8, 10, 8)
	);
	// Update the distance state
	cameraControlRef.current?.setBoundary(boundingBox);

	return (
		<>
			{/* <CameraControls
				dollySpeed={0.4}
				maxDistance={distance}
				minDistance={4}
				maxPolarAngle={Math.PI / 2.4}
				minPolarAngle={Math.PI / 8}
				minAzimuthAngle={-Math.PI / 1}
				maxAzimuthAngle={Math.PI / 1}
				truckSpeed={1}
			/> */}
			<OrbitControls
				maxPolarAngle={Math.PI / 2.2}
				minPolarAngle={Math.PI / 8}
				minAzimuthAngle={-Math.PI / 1}
				maxAzimuthAngle={Math.PI / 1}
				enablePan={false}
				makeDefault
				enableZoom={true}
				maxDistance={window.innerWidth < 1280 ? 43 : 35}
				minDistance={1}
			/>
			<color
				args={['#030202']}
				attach="background"
			/>
			<ambientLight intensity={1.5} />
			<directionalLight
				intensity={3}
				position={[0, 5, 1]}
			/>
			<Bounds
				fit
				observe
				margin={1}
			>
				{/*  */}
				{/* <OrbitControls enabled={false} /> */}

				{/* <CameraPositionLogger event='mousedown' /> */}
				<group position={[0, 0, 0]}>
					<SelectToZoom>
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
					</SelectToZoom>
				</group>
			</Bounds>
			<Room />
			<Annotations />
			<Outer />
		</>
	);
};

export default Experience;
