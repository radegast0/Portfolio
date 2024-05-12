import { useGLTF } from "@react-three/drei";

export default function GraduationProject(props) {
  const { nodes } = useGLTF(".././models/p1.glb");
  const material = useGLTF(".././models/p2.glb").nodes['apple-#173'].material;

  return (
    <group {...props} dispose={null}>
      <mesh position={[0,0,-0.015]} scale={1} geometry={nodes.Curve.geometry} material={material} />
    </group>
  );
}

useGLTF.preload(".././models/p1.glb");
