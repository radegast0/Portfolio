import React, { useEffect } from "react";
import gsap from "gsap";
import { svgs } from "../utils/svg";
import { useGSAP } from "@gsap/react";
import { label } from "three/examples/jsm/nodes/Nodes.js";

const Navbar = React.forwardRef(({ setIsAbout }, ref) => {
  useGSAP(() => {
    gsap.from(".nav-item", {
      delay: 0.5,
      opacity: 1,
      duration: 1,
      y: -50,
      ease: "power4.inOut",
    });
  });

  const navList = [
    {
      label: "Home",
      position:
        screen.width < 1280 ? { x: 6, y: 12, z: 18 } : { x: 4, y: 6, z: 8 },
      target: { x: -2, y: 1, z: -2 },
    },
    {
      label: "About",
      position:
        screen.width < 1280
          ? { x: 0.5, y: 3.4, z: -6.2 }
          : { x: -0.5, y: 3, z: -5.84 },
      target: { x: -2, y: 2.8, z: -5.45 },
    },
    // {
    //   label: "Projects",
    //   position:
    //     screen.width < 1280
    //       ? { x: -1, y: 4, z: -1.5 }
    //       : { x: -3.5, y: 4, z: -1.5 },
    //   target: { x: -7, y: 4, z: -1.7 },
    // },
    {
      label: "Skills",
      position:
        screen.width < 1280
          ? { x: 0, y: 8, z: 0 }
          : { x: -3.5, y: 3.5, z: -3.5 },
      target: { x: -5, y: 3, z: -5 },
    },
    {
      label: "Contact",
    },
  ];

  const handleButtonClick = (nav) => {
    if (nav.position && nav.target) {
      gsap.to(ref.current.object.position, {
        duration: 1,
        x: nav.position.x,
        y: nav.position.y,
        z: nav.position.z,
        ease: "power4.inOut",
      });
      gsap.to(ref.current.target, {
        duration: 1,
        x: nav.target.x,
        y: nav.target.y,
        z: nav.target.z,
        ease: "power4.inOut",
      });
    }
    if (nav.label === "About") {
      setTimeout(() => {
        setIsAbout(true);
      }, 750);
    } else {
      setIsAbout(false);
    }
  };

  return (
    <>
      <header className="nav-item flex w-full items-center justify-between py-5 uppercase sm:px-10">
        <nav className="screen-max-width flex w-full ">
          <div className="flex flex-1 justify-center gap-0 lg:gap-12">
            {navList.map((nav, label) => (
              <div
                onClick={() => handleButtonClick(nav)}
                className="flex cursor-pointer items-center p-1 px-4 text-xs transition-all hover:opacity-75 md:text-base lg:text-xl"
                key={label}
              >
                {nav.label === "Contact" ? (
                  <>
                    <a
                      className="flex items-center"
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScjKWKeohtRaUrtlzvJwkaIKbXJMPaEfrVtdhFMUt9l3RaZaQ/viewform"
                    >
                      {nav.label}
                      <span className="scale-75 md:scale-90 lg:scale-100">
                        {svgs[2]}
                      </span>
                    </a>
                  </>
                ) : (
                  nav.label
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
});

export default Navbar;
