
const CustomEnv = () => {
	return (
		<group
			rotation={[0, -Math.PI / 15, 0]}
			position={[2, 2.8, -4]}
		>
			<mesh>
				<planeGeometry args={[10, 10]} />
				<meshStandardMaterial color="red" />
			</mesh>
			<mesh
				rotation={[0, -Math.PI / 2, 0]}
				position={[5, 0, 10]}
			>
				<planeGeometry args={[20, 10]} />
				<meshStandardMaterial color="green" />
			</mesh>
			<mesh
				rotation={[0, Math.PI / 2, 0]}
				position={[-5, 0, 10]}
			>
				<planeGeometry args={[20, 10]} />
				<meshStandardMaterial color="blue" />
			</mesh>
			<mesh
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, 5, 5]}
			>
				<planeGeometry args={[10, 10]} />
				<meshStandardMaterial color="cyan" />
			</mesh>
			<mesh
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -5, 10]}
			>
				<planeGeometry args={[10, 20]} />
				<meshStandardMaterial color="purple" />
			</mesh>
		</group>
	);
};

export default CustomEnv;
