import { PerspectiveCamera, OrbitControls, Html } from '@react-three/drei';
import Room from './Room';
import Carpet from './Carpet';
import { Guitar } from './Guitar';
import Logos from './Logos';
import { Book } from './Book';
import Laptop from './Laptop';
import { useEffect, useRef, useState } from 'react';
import Main from '../html/Main';
import Annotation from './Annotation';

const Experience = () => {
	const room = useRef();
	const carpet = useRef();
	const guitar = useRef();
	const logos = useRef();
	const book = useRef();
	const laptop = useRef();


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
				position={[8, 12, 20]}
			/>
			<ambientLight intensity={1} />
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
			<mesh position={[5,5,5]}  >
				<boxGeometry args={[2, 2, 2]} />
				<meshBasicMaterial color='hotpink' />
				<Html position={[1.5,0,1.5]} distanceFactor={8} occlude wrapperClass='annotation'> annotation </Html>
			</mesh>

			<group>
				<Room ref={room} />
				<Carpet ref={carpet} />
				<Guitar ref={guitar} />
				<Logos ref={logos} />
				<Book ref={book} />
				<Laptop ref={laptop} />
			</group>
		</>
	);
};

export default Experience;
