import {
	PerspectiveCamera,
	OrbitControls,
	Html,
} from '@react-three/drei';
import Room from './Room';
import Carpet from './Carpet';
import { Guitar } from './Guitar';
import Logos from './Logos';
import { Book } from './Book';
import { useEffect, useRef, useState } from 'react';
import Annotation from './Annotation';
import Laptop from './Laptop';
import Amp from './Amp';
import WallLight from './WallLight';
import CameraPositionLogger from '../helpers/CameraPositionLogger';

const Experience = () => {
	const [distance, setDistance] = useState();

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

			<ambientLight intensity={3} />
			<directionalLight
				position={[0, 10, 0]}
				intensity={1}
			/>

			 {/* <CameraPositionLogger event='mousedown' /> */}
			 <OrbitControls
				maxDistance={distance}
				minDistance={7}
				maxPolarAngle={Math.PI / 2.4}
				minPolarAngle={Math.PI / 8}
				// minAzimuthAngle={-Math.PI / 1.5}
				// maxAzimuthAngle={Math.PI / 1}
				enablePan={true}
			/> 
			<mesh position={[5, 5, 5]}>
				<boxGeometry args={[2, 2, 2]} />
				<meshBasicMaterial color="hotpink" />
				<Html
					position={[1.5, 0, 1.5]}
					distanceFactor={8}
					occlude
					wrapperClass="annotation"
				>
					<Annotation text={'❤️'} />
				</Html>
			</mesh>

			<group>
				<Room />
				<Carpet />
				<Guitar />
				<Logos />
				<Book />
				<Laptop />
				<Amp />
				<WallLight />
			</group>
		</>
	);
};

export default Experience;
