import { Plane, Stage, Stars } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

const Background = () => {
  const { size, mouse } = useThree();
  const meshRef = useRef();
  
  useFrame(() => {
    // Calculate rotation based on mouse position
    const mouseX = mouse.x * size.width / 32;
    const mouseY = mouse.y * size.height / 64;
    const targetRotationX = (mouseX / size.width) * Math.PI;
    const targetRotationY = -(mouseY / size.height) * Math.PI;

    // Rotate the mesh
    meshRef.current.rotation.x += (targetRotationY - meshRef.current.rotation.x) * 0.01;
    meshRef.current.rotation.y += (targetRotationX - meshRef.current.rotation.y) * 0.05;
  });


	return (
    <>
    
    
    <Stars saturation={1} fade speed={1.5} />
		<Stage adjustCamera>
      <mesh ref={meshRef}>
        <Plane
          args={[10, 10]}
          position={[0, 0, -6]}
        >
          <meshBasicMaterial color={'hotpink'} />
        </Plane>
        <Plane
          args={[10, 10]}
          position={[5, 0, -1]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <meshBasicMaterial color={'red'} />
        </Plane>
        <Plane
          args={[10, 10]}
          position={[-5, 0, -1]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <meshBasicMaterial color={'green'} />
        </Plane>
        <Plane
          args={[10, 10]}
          position={[0, 5, -1]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial color={'blue'} />
        </Plane>
        <Plane
          args={[10, 10]}
          position={[0, -5, -1]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial color={'yellow'} />
        </Plane>
      </mesh>
    </Stage>
    </>
	);
};

export default Background;
