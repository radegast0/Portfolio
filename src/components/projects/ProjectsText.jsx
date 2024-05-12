import { Text } from "@react-three/drei";
import { color } from "three/examples/jsm/nodes/Nodes.js";

const aboutTextData = [
  { text: "Graduation Project", scale: 1.5, position: [1.5, 18, 0] },
  {
    text: "Facial recognition technology",
    scale: 0.85,
    position: [0.8, 16, 0],
  },
  {
    text: "to automatically mark attendance.",
    scale: 0.85,
    position: [1.75, 15, 0],
  },
  {
    text: "Link ",
    scale: 0.85,
    position: [9, 13, 0],
    color: "#FFC55A",
    link: "https://github.com/radegast0/Visual-Attendance",
  },

  { text: "Apple Landing", scale: 1.5, position: [3.8, 4, 0] },
  { text: "Created a new landing page", scale: 0.85, position: [3, 2, 0] },
  {
    text: "inspired by Apple's design aesthetics",
    scale: 0.85,
    position: [0.2, 1, 0],
  },
  {
    text: "featuring innovative add-ons to",
    scale: 0.85,
    position: [1.75, 0, 0],
  },
  { text: "enhance user engagement", scale: 0.85, position: [3.8, -1, 0] },
  { text: "and experience.", scale: 0.85, position: [6, -2, 0] },
  {
    text: "Link ",
    scale: 0.85,
    position: [8.5, -4, 0],
    color: "#FFC55A",
    link: "https://github.com/radegast0/Apple-Clone",
  },

  { text: "MERN-R3Feats", scale: 1.5, position: [28.5, 24, 0] },

  { text: "A MERN-stack web application", scale: 0.85, position: [28.5, 22, 0] },
  { text: "with a delightful 3D burger", scale: 0.85, position: [28.5, 21, 0] },
  { text: "on the hero section", scale: 0.85, position: [28.5, 20, 0] },
  { text: "that allows users to ", scale: 0.85, position: [28.5, 19, 0] },
  { text: "search restaurants and", scale: 0.85, position: [28.5, 18, 0] },
  { text: "place orders to the address.", scale: 0.85, position: [28.5, 17, 0] },
  {
    text: "Link ",
    scale: 0.85,
    position: [28.5, 15, 0],
    color: "#FFC55A",
    link: "https://mern-food-frontend-fv1r.onrender.com",
  },
];

const ProjctsText = () => {
  const font = "./fonts/Kode_Mono/KodeMono-VariableFont_wght.ttf";

  return (
    <mesh position={[-7.85, 3, -1]} rotation={[0, Math.PI / 2, 0]} scale={0.05}>
      {aboutTextData.map((data, index) => (
        <Text
          key={index}
          font={font}
          scale={data.scale}
          position={data.position}
          onClick={() => {
            if (data.link) {
              window.open(data.link);
            }
          }}
          color={data.color}
        >
          {data.text}
        </Text>
      ))}
    </mesh>
  );
};

export default ProjctsText;
