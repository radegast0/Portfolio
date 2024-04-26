import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export default function Cat() {
  const model = useGLTF("./models/cat.glb");
  const animations = useAnimations(model.animations, model.scene);

  // const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    const action = animations.actions["Take 001"];
    action.play();
  }, []);

  return (
    <primitive
      rotation={[0, -Math.PI / 1.3, 0]}
      position={[-1.6, 0.3, -5.1]}
      scale={[0.065, 0.065, 0.065]}
      object={model.scene}
    />
  );
}

useGLTF.preload("./models/cat.glb");
