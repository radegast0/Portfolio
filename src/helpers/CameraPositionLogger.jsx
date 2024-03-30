import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useRef } from 'react';

const CameraPositionLogger = ({ event } = {}) => {
	const { camera } = useThree();
	const cameraRef = useRef(camera);

	useEffect(() => {
		const logCameraPosition = () => {
			const { x, y, z } = cameraRef.current.position;
			const roundedX = Math.round(x * 100) / 100;
			const rooundedY = Math.round(y * 100) / 100;
			const roundedZ = Math.round(z * 100) / 100;
			console.log(
				`Camera position: x: ${roundedX}, y: ${rooundedY}, z: ${roundedZ}`
			);
		};
		cameraRef.current = camera;
		window.addEventListener(event || 'click', logCameraPosition);

		return () => {
			window.removeEventListener(event || 'click', logCameraPosition);
		};
	}, [event, camera]);

	return null
};

export default CameraPositionLogger;
