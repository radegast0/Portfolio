import Navbar from './components/Navbar';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import Background from './components/Background';




const App = () => {
	return (
		<>
			<Canvas style={{ height: '100vh', width: '100wh' }}
			camera={{ fov: 75, position: [0, 0, 6] }}
			>
				<OrbitControls />
				<Background />
				<Html fullscreen>
					<Navbar />
				</Html>
			</Canvas>
		</>
	);
};

export default App;
