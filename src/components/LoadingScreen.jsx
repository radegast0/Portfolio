import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const { active, progress } = useProgress();
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    isActive && (
      <div className="fixed left-0 top-0 bg-[#03030E]">
        <div className="z-50 h-svh w-svw p-4 md:p-6 lg:p-12">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="">
              <h1 className="text-[28px] text-slate-900 lg:text-[37px]">
                Fatih Yonucuoğlu
              </h1>
              <div className="flex gap-1">
                <div>
                  <h1 className="tracking-widest lg:text-2xl">Portfolio</h1>
                  <div className="h-[2px] w-full rounded-full bg-slate-900 md:h-1">
                    <div
                      className="h-full bg-white"
                      style={{
                        width: `${progress}%`,
                        transition: "width 0.4s",
                      }}
                    ></div>
                  </div>
                </div>
                <h1 className="mx-auto text-5xl tracking-tighter lg:text-6xl">
                  {progress.toFixed(progress < 100 ? 2 : 1)}%
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LoadingScreen;
