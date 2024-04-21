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
import React, { forwardRef, useEffect } from 'react';
import PositionHelpers from '../utils/PositionHelpers';
import { gsap } from 'gsap';
import TvScreen from './TvScreen';

const Experience = forwardRef(({ isAbout }, ref) => {
	useEffect(() => {
		gsap.to(ref.current.object.position, {
			delay: 0.1,
			duration: 1.8,
			x: screen.width < 1280 ? 24 : 10,
			y: screen.width < 1280 ? 12 : 6,
			z: screen.width < 1280 ? 32 : 15,
			ease: 'power4.inOut',
		});
		gsap.to(ref.current.target, {
			duration: 1,
			x: -2,
			y: 1,
			z: -2,
			ease: 'none',
		});
	}, [ref]);

	return (
		<>
			<color
				args={['black']}
				attach="background"
			/>
			<ambientLight intensity={1.5} />
			<directionalLight
				intensity={3}
				position={[0, 5, 1]}
			/>

			<group position={[0, 0, 0]}>
				<Guitar />
				<Chair />
				<Mug />
				<Book />
				<Curtain />
				<Logos />
				<Carpet />
				<WallLight />
				<Amp />
			</group>
			<Laptop
				isAbout={isAbout}
				ref={ref}
			/>
			<Annotations ref={ref} />
			<Room />
			<Outer />
			{/* <PositionHelpers /> */}
			{/* <CameraPositionLogger /> */}
		</>
	);
});

export default Experience;
