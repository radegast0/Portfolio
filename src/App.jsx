import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	Environment,
	PerspectiveCamera,
	OrthographicCamera,
} from '@react-three/drei';
import Background from './components/Background';
import { Perf } from 'r3f-perf';

const App = () => {
	return (
		<>
			<Canvas
				style={{ height: '100vh', width: '100wh' }}
				camera={{ fov: 35 }}
				flat
			>
				<Perf />

				{/* Background */}
				<Background />
			</Canvas>
		</>
	);
};

export default App;
