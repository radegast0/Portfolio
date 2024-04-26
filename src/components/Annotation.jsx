import { Html } from "@react-three/drei";
import { svgs } from "../utils/svg";
import { useState } from "react";

const Annotation = ({
  onClick,
  position,
  selected,
  title,
  children,
  childSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const distanceFactor = screen.width < 1280 ? 12 : undefined;

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Html position={position} center occlude distanceFactor={distanceFactor}>
        <div
          className={`cursor-pointer select-none overflow-hidden whitespace-nowrap rounded-3xl border-[3px] border-zinc-300 bg-[#00000088] hover:border-2 hover:bg-[#000000CC] md:border-2 ${isOpen ? "p-4 transition-all duration-100" : "p-2 transition-all duration-100"} touch-none `}
          onClick={onClick}
          onMouseEnter={() => {
            handleOpen();
          }}
          onMouseLeave={() => {
            handleClose();
          }}
        >
          <div className={childSelected ? `flex flex-col gap-4` : null}>
            <div className="flex items-center gap-x-2">
              {isOpen ? title : "" || null} {svgs[selected]}
            </div>
            {isOpen ? (
              <div
                className={
                  childSelected
                    ? `flex transition-all hover:text-slate-100 hover:opacity-80`
                    : null
                }
              >
                {children}
                {svgs[childSelected]}
              </div>
            ) : null}
          </div>
        </div>
      </Html>
    </>
  );
};

export default Annotation;
