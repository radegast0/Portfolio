/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import AboutText3D from "./AboutText3D";

export default function LaptopScreen2(props) {
  const { nodes, materials } = useGLTF("./models/laptopScreen2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.laptopScreen.geometry}
        position={[-1.959, 2.763, -5.433]}
        rotation={[0.85, -1.19, 0.813]}
        scale={[3.241, 2.977, 2.977]}
      >
        <meshBasicMaterial color="#03030E" />
        <Suspense fallback={null}>
          <AboutText3D />
        </Suspense>
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/laptopScreen2.glb");
