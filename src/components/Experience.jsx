import { Bounds, Html } from '@react-three/drei';
import Room from './Room';
import Carpet from './Carpet';
import Logos from './Logos';
import Book from './Book';
import Laptop from './Laptop';
import Amp from './Amp';
import WallLight from './WallLight';
import Outer from './Outer';
import Guitar from './Guitar';
import Curtain from './Curtain';
import { Mug } from './Mug';
import Chair from './Chair';
import Annotations from './Annotations';
import SelectToZoom from './SelectToZoom';
import React, { forwardRef } from 'react';

const Experience = forwardRef(({ children }, ref) => {
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
			>
				<group position={[0, 0, 0]}>
					<SelectToZoom>
						<Guitar />
					</SelectToZoom>
					<Chair />
					<Mug />
					<Book />
					<Curtain />
					<Logos />
					<Carpet />
					<WallLight />
					<Amp />
				</group>
			</Bounds>
			<Laptop />
			<Annotations ref={ref} />
			<Room />
			<Outer />
			
			

			{/* <CameraPositionLogger /> */}
		</>
	);
});

export default Experience;
