import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Main from './html/Main';
import { OrbitControls, useProgress } from '@react-three/drei';
import { useRef, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import './styles/index.css';

const App = () => {
	const controls = useRef(null);
	const [isAbout, setIsAbout] = useState(false);
	const { active } = useProgress();

	return (
		<>
			<div className="fixed font-kodemono bg-slate-900 font top-0 left-0 w-screen h-screen z-0">
				{!active && (
					<div className="fixed top-0 left-0 right-0 z-10">
						<Main
							setIsAbout={setIsAbout}
							ref={controls}
						/>
					</div>
				)}
				<Canvas
					className="touch-none"
					flat={true}
					shadows
					camera={{ fov: 70 }}
				>
					<OrbitControls
						ref={controls}
						maxPolarAngle={Math.PI / 2.2}
						minPolarAngle={Math.PI / 8}
						minAzimuthAngle={-Math.PI / 1}
						maxAzimuthAngle={Math.PI / 1}
						enablePan={false}
						makeDefault
						enableZoom={true}
						maxDistance={window.innerWidth < 1280 ? 35 : 25}
						minDistance={1}
					/>
					<Experience
						isAbout={isAbout}
						ref={controls}
					/>
				</Canvas>
				<LoadingScreen />
			</div>
		</>
	);
};

export default App;
