import React from 'react';
import Navbar from './components/Navbar';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import Background from './components/Background';

const App = () => {
	return (
		<Canvas style={{ height: '100vh' }}>
      <Background>
        
      </Background>
			<Html fullscreen>
				<Navbar />
			</Html>
		</Canvas>
	);
};

export default App;
