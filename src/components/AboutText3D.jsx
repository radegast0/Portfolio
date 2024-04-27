import { Center, Text } from "@react-three/drei";

const aboutTextData = [
  { text: "Fatih Yonucuoğlu", scale: 2.5, position: [-5, 10, 0] },
  { text: "Web & Software Developer", scale: 1, position: [-9.7, 8, 0] },
  {
    text: "Working remotely from Istanbul, Turkey",
    scale: 1,
    position: [5.7, 5.5, 0],
  },
  {
    text: "Currently a Front-end Intern at",
    position: [3, 4.2, 0],
    link: "https://test.org",
  },
  { text: "Digiole", color: "#FFC55A", position: [15, 4.2, 0] },
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
    text: "Contact Form",
    position: [13.5, -9, 0],
    color: "#FFC55A",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScjKWKeohtRaUrtlzvJwkaIKbXJMPaEfrVtdhFMUt9l3RaZaQ/viewform",
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
