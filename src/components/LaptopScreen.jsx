import React, { useRef } from "react";
import * as THREE from "three";
import { shaderMaterial, useGLTF } from "@react-three/drei";
import pcVertexShader from "../shaders/laptop/vertex.glsl";
import pcFragmentShader from "../shaders/laptop/fragment.glsl";
import { extend, useFrame } from "@react-three/fiber";

const PcScreenMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#03030E"),
    uColorEnd: new THREE.Color("#123456"),
  },
  pcVertexShader,
  pcFragmentShader,
);

extend({ PcScreenMaterial });

export default function LaptopScreen({ isAbout }, props) {
  const laptopScreenMaterial = useRef();
  useFrame((state, delta) => {
    if (
      laptopScreenMaterial.current &&
      laptopScreenMaterial.current.uTime !== undefined
    ) {
      laptopScreenMaterial.current.uTime = state.clock.elapsedTime * 0.5;
    }
  });
  const { nodes, materials } = useGLTF("./models/laptopScreen.glb");
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.laptopScreen.geometry}
          position={[-1.959, 2.763, -5.433]}
          rotation={[0.85, -1.19, 0.813]}
          scale={[3.241, 2.977, 2.977]}
        >
          <pcScreenMaterial ref={laptopScreenMaterial} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("./models/laptopScreen.glb");
