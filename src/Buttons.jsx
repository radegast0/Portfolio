import React, { useRef } from 'react';
import TWEEN from '@tweenjs/tween.js';
import { Html } from '@react-three/drei';

const Buttons = () => {
	const controls = useRef();
	const camera = useRef();
	const test = [
		{
			title: 'ViewA',
			description: '<p>Looking Down from Above</p>',
			position: {
				x: 0,
				y: 25,
				z: 0,
			},
			lookAt: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			title: 'ViewB',
			position: {
				x: 8,
				y: -1.5,
				z: 2,
			},
			lookAt: {
				x: 8.1,
				y: -1.5,
				z: 2,
			},
		},
		{
			title: 'ViewC',
			position: {
				x: 5,
				y: 5.11,
				z: 12,
			},
			lookAt: {
				x: 5.1,
				y: 0,
				z: 12,
			},
		},
	];

	const Buttons = test.map(({ title, lookAt, position }) => (
		<>
			<button
                key={title}
				onClick={() => {
					new TWEEN.Tween(controls.current.target)
						.to(
							{
								x: lookAt.x,
								y: lookAt.y,
								z: lookAt.z,
							},
							2100
						)
						.easing(TWEEN.Easing.Cubic.Out)
						.start();

					// change camera position
					new TWEEN.Tween(camera.current.position)
						.to(
							{
								x: position.x,
								y: position.y,
								z: position.z,
							},
							2000
						)
						.easing(TWEEN.Easing.Cubic.Out)
						.start();
				}}
			>
				{title}
			</button>
		</>
	));

	return Buttons;
};

export default Buttons;
