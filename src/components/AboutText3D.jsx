import { Text } from "@react-three/drei";

const aboutTextData = [
  { text: "Fatih Yonucuoğlu", scale: 2.5, position: [-5, 10, 0] },
  { text: "Web & Software Developer", scale: 1, position: [-9.7, 8, 0] },
  {
    text: "Working remotely from Istanbul, Turkey",
    scale: 1,
    position: [5.7, 5.5, 0],
  },
  {
    text: "Intern Software Engineer at",
    position: [-8, 4.2, 0],
    link: "https://test.org",
    
  },
  {
    text: "Istanbul Grand Airport (IGA)",
    color: "#FFC55A",
    // link: "",
    position: [8.9, 4.2, 0],
  },
  {
    text: "With experience in the industry, I am a front-end developer",
    position: [-1, 1, 0],
    scale: 0.9,
  },
  {
    text: `specializing in both traditional front-end development and \n3D experiences.`,
    position: [-1.33, -0.7, 0],
    scale: 0.9,
  },

  {
    text: "Direct Mail",
    position: [13.9, -8.5, 0],
    color: "#FFC55A",
    link: "mailto:fatih.yonucuoglu@gmail.com",
  },
];

const AboutText3D = () => {
  const font = "./fonts/Kode_Mono/KodeMono-VariableFont_wght.ttf";

  return (
    <mesh position={[0, 0, -0.0015]} rotation={[0, Math.PI, 0]} scale={0.01}>
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

export default AboutText3D;
