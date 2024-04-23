import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Main from './html/Main';
import { Loader, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';

const App = () => {
	const controls = useRef(null);
	const [isAbout, setIsAbout] = useState(false);
	const container = {
		background: '#03030E',
	};
	const inner = {
		background: 'rgb(15 23 42)',
		height: '12px',
		width: '140px',
	};
	const data = {
		fontFamily: 'kode, sans-serif',
		textAlign: 'start',
		fontSize: '12px',
		letterSpacing: '0.1em',
	};
	const bar = {
		height: '12px',
	};

	return (
		<>
			<div className="fixed trac font-kodemono bg-slate-900 font top-0 left-0 w-screen h-screen z-0">
				<div className="fixed top-0 left-0 right-0 z-10">
					<Main
						setIsAbout={setIsAbout}
						ref={controls}
					/>
				</div>
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
				{/* <LoadingScreen /> */}
				<Loader
					containerStyles={container}
					innerStyles={inner}
					dataStyles={data}
					barStyles={bar}
					dataInterpolation={(p) => `${p.toFixed(2)}%
					Fatih Yonucuoğlu 
					`}
				/>
			</div>
		</>
	);
};

export default App;
