import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Main from './html/Main';
import { Loader, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';

const App = () => {
	const controls = useRef(null);
	const [isAbout, setIsAbout] = useState(false);

	return (
		<>
			<div className="fixed top-0 left-0 w-screen h-screen z-0">
				<div className="fixed top-0 left-0 right-0 z-10">
					<Main
						setIsAbout={setIsAbout}
						ref={controls}
					/>
				</div>
				<Canvas
					flat={true}
					shadows
					camera={{ fov: 50 }}
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
						maxDistance={window.innerWidth < 1280 ? 43 : 35}
						minDistance={1}
					/>

					<Experience
						isAbout={isAbout}
						ref={controls}
					/>
				</Canvas>
				<Loader />
			</div>
		</>
	);
};

export default App;
