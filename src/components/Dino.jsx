import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export default function Dino(props) {
	const model = useGLTF('./models/dino-fixed.glb');

	const animations = useAnimations(model.animations, model.scene);

	useEffect(() => {
		const action = animations.actions["AnimationStack"];
		action.play();
	}, []);


	return (
		<primitive
            rotation={[0,-Math.PI / 1.5, 0]}
            position={[-1.7, 2.32, -4.2]}
            scale={[0.1, 0.1, 0.1]}
			object={model.scene}
			{...props}
		/>
	);
}

useGLTF.preload('./models/dino-fixed.glb');
