import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	Environment,
	PerspectiveCamera,
} from '@react-three/drei';
import Background from './components/Background';


const App = () => {
	return (
		<>
			<Canvas
				style={{ height: '100vh', width: '100wh', background: 'black' }}
				camera={{ fov: 75 }}
			>
				<PerspectiveCamera
					makeDefault
					position={[0, 0, 10]}
				/>
				{/* OrbitControls */}
				<OrbitControls
					enablePan={false}
					maxDistance={30}
					minPolarAngle={Math.PI / 4}
					maxPolarAngle={Math.PI / 2}
					minAzimuthAngle={-Math.PI / 3}
					maxAzimuthAngle={Math.PI / 3}
				/>

				{/* Environment */}
				<Environment preset="sunset" />

				{/* Background */}
				<Background />
			</Canvas>
		</>
	);
};

export default App;
