import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const Background = () => {
  const { size,mouse } = useThree();
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value = elapsedTime;
    }
  });


  useFrame(() => {
    // Calculate rotation based on mouse position
    const mouseX = mouse.x * size.width / 32;
    const mouseY = mouse.y * size.height / 32;
    const targetRotationX = (mouseX / size.width) * Math.PI;
    const targetRotationY = -(mouseY / size.height) * Math.PI;

    // Rotate the mesh
    meshRef.current.rotation.x += (targetRotationY - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (targetRotationX - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <mesh ref={meshRef}>
        <planeGeometry args={[10, 5]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};

export default Background;
