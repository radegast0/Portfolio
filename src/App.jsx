import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Main from './html/Main';
import {
	CameraControls,
	MapControls,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { useRef } from 'react';

const App = () => {
	const controls = useRef(null);
	return (
		<>
			<div className="fixed top-0 left-0 w-screen h-screen z-0">
				<div className="fixed top-0 left-0 right-0 z-10">
					<Main ref={controls} /> {/* there is a navbar inside */}
				</div>
				<Canvas
					flat={true}
					shadows
				>
					<PerspectiveCamera
						makeDefault
						position={[0, 2, 0]}
					/>
					{/* <MapControls
						enableDamping={true}
						enableRotate={true}
						enablePan={false}
						rotateSpeed={0.1}
						enableZoom={false}
					/> */}
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

					<Experience ref={controls} />

					{/* <Perf /> */}
				</Canvas>
			</div>
		</>
	);
};

export default App;
