import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';

const App = () => {
	return (
		<>
			<Canvas
				style={{ height: '100vh', width: '100wh' }}
				camera={{ fov: 35 }}
				flat={true}	
				shadows			
			>
				<Experience />
			</Canvas>
		</>
	);
};

export default App;
