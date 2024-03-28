import { PerspectiveCamera, OrbitControls, Html, OrthographicCamera } from '@react-three/drei';
import Room from './Room';
import Carpet from './Carpet';
import { Guitar } from './Guitar';
import Logos from './Logos';
import { Book } from './Book';
import { useEffect, useRef, useState } from 'react';
import Main from '../html/Main';
import Annotation from './Annotation';
import Laptop from './Laptop';
import Amp from './Amp';

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
			<Html fullscreen>
				<Main />
			</Html>
			<color
				args={['#030202']}
				attach="background"
			/>
			<PerspectiveCamera
				ref={perspectiveCameraRef}
				makeDefault
				position={[8, 12, 15]}
			/>
			<ambientLight intensity={3} />
			<directionalLight
				position={[0, 10, 0]}
				intensity={1}
			/>

			<OrbitControls
				ref={orbitControlsRef}
				camera={perspectiveCameraRef.current}
				maxDistance={distance}
				minDistance={7}
				maxPolarAngle={Math.PI / 2.4}
				minPolarAngle={Math.PI / 8}
				// minAzimuthAngle={-Math.PI / 1.5}
				// maxAzimuthAngle={Math.PI / 1}
				enablePan={false}
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
					{' '}
					<Annotation />{' '}
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
			</group>
		</>
	);
};

export default Experience;
