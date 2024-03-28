import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Main from './html/Main';

const App = () => {
	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-10">
				<Main />
			</div>
			<div className="fixed top-0 left-0 w-screen h-screen z-0">
				<Canvas
					camera={{ fov: 35 }}
					flat={true}
					shadows
				>
					<Experience />
				</Canvas>
			</div>
		</>
	);
};

export default App;
