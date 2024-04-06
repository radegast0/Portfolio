import {
	PerspectiveCamera,
	CameraControls,
	Bounds,
	Html,
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
	const [distance, setDistance] = useState();

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
				makeDefault
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
			{/* <OrbitControls enabled={false} /> */}
			<PerspectiveCamera
				makeDefault
				position={[8, 12, 15]}
				fov={60}
				near={0.01}
				far={100}
			/>

			{/* <CameraPositionLogger event='mousedown' /> */}
			<group>
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
				<Bounds>
					<SelectToZoom>
						<group>
							<mesh position={[2, 2, 2]}>
								<boxGeometry args={[1, 1, 1]} />
								<meshBasicMaterial color="red" />
							</mesh>
							<mesh position={[1, 1, 1]}>
								<boxGeometry args={[1, 1, 1]} />
								<meshBasicMaterial color="green" />
							</mesh>
						</group>
					</SelectToZoom>
				</Bounds>
			</group>

			<Annotations />
			<Outer />
		</>
	);
};

export default Experience;
