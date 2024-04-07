import { Canvas, useThree } from '@react-three/fiber';
import Experience from './components/Experience';
import Main from './html/Main';
import { Perf } from 'r3f-perf';
import {
	CameraControls,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';

const App = () => {
	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-10 transition-all duration-150">
				<Main />
			</div>
			<div className="fixed top-0 left-0 w-screen h-screen z-0 transition-all duration-150">
				<Canvas
					flat={true}
					shadows
				>
					<PerspectiveCamera
						makeDefault
						position={[0, 2, 0]}
					/>


					<Experience />
					{/* <Perf /> */}
				</Canvas>
			</div>
		</>
	);
};

export default App;
