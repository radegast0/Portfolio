import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	Environment,
	PerspectiveCamera,
} from '@react-three/drei';
import Background from './components/Background';
import { Perf } from 'r3f-perf';

const App = () => {
	return (
		<>
			<Canvas
				style={{ height: '100vh', width: '100wh', background: '#010009' }}
				camera={{ fov: 75 }}
			>
				<Perf />

				{/* Background */}
				<Background />
			</Canvas>
		</>
	);
};

export default App;
