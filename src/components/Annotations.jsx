import React from "react";
import Annotation from "./Annotation";
import { gsap } from "gsap";

const Annotations = React.forwardRef((props, ref) => {
  const annotationList = [
    {
      position: [-6, 2.4, 1.2],
      selected: 0,
      title: "Spotify",
      childSelected: 1,
      distanceFactor: 10,
      link: "https://spotify-woad-delta.vercel.app/",
      text: "Visit",
      cameraPosition:
        screen.width < 1280
          ? { x: 1, y: 3.2, z: 0.5 }
          : { x: -2.4, y: 3.1, z: 0.03 },
      targetPosition: { x: -6.6, y: 2.4, z: 1.5 },
    },
    {
      position: [-6, 3.3, -6],
      selected: 3,
      title: "Skills",
      childSelected: 2,
      link: "https://github.com/radegast0",
      text: "GitHub",
      cameraPosition:
        screen.width < 1280
          ? { x: 0, y: 8, z: 0 }
          : { x: -3.5, y: 3.5, z: -3.5 },
      targetPosition: { x: -5, y: 3, z: -5 },
    },

    {
      position: [-7, 5, -2],
      selected: 4,
      title: "Projects",
      distanceFactor: 9,
      cameraPosition:
        screen.width < 1280
          ? { x: -1, y: 4, z: -1.5 }
          : { x: -3.5, y: 4, z: -1.5 },
      targetPosition: { x: -7, y: 4, z: -1.7 },
    },
  ];

  const handleClick = (annotation) => {
    gsap.to(ref.current.object.position, {
      duration: 1,
      x: annotation.cameraPosition.x,
      y: annotation.cameraPosition.y,
      z: annotation.cameraPosition.z,
      ease: "power4.inOut",
    });
    gsap.to(ref.current.target, {
      duration: 1,
      x: annotation.targetPosition.x,
      y: annotation.targetPosition.y,
      z: annotation.targetPosition.z,
      ease: "power4.inOut",
    });
  };

  // console.log(ref.current?.object?.position);
  // console.log(ref.current?.target);

  return (
    <>
      {annotationList.map((annotation, index) => (
        <Annotation
          onClick={() => handleClick(annotation)}
          key={index}
          position={annotation.position}
          selected={annotation.selected}
          title={annotation.title}
          childSelected={annotation.childSelected}
          distanceFactor={annotation.distanceFactor}
        >
          {annotation.link && (
            <a target="_blank" href={annotation.link}>
              {annotation.text}
            </a>
          )}
        </Annotation>
      ))}
    </>
  );
});

export default Annotations;
