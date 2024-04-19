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

const Experience = forwardRef(({ isAbout }, ref) => {
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
			<Bounds
				fit
				observe
				near={5}
				far={100}
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
			<Laptop isAbout={isAbout} ref={ref} />
			<Annotations ref={ref} />
			<Room />
			<Outer />
			
			

			{/* <CameraPositionLogger /> */}
		</>
	);
});

export default Experience;
