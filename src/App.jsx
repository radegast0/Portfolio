import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Main from "./html/Main";
import { OrbitControls, useProgress } from "@react-three/drei";
import { useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./styles/index.css";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const controls = useRef(null);
  const [isAbout, setIsAbout] = useState(false);
  const { active } = useProgress();

  return (
    <>
    <Analytics />
      <div className="font left-0 top-0 z-0 bg-slate-900 font-kodemono">
        {!active && (
          <div className="fixed left-0 right-0 top-0 z-10">
            <Main setIsAbout={setIsAbout} ref={controls} />
          </div>
        )}
        <Canvas flat={true} camera={{ fov: 70 }}>
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
          <Experience isAbout={isAbout} ref={controls} />
        </Canvas>
        <LoadingScreen />
      </div>
    </>
  );
};

export default App;
