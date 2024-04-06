import { useGLTF } from '@react-three/drei';

export default function Logos(props) {
	const { nodes, materials } = useGLTF('./models/logos.glb');
	return (
		<>
      
			<group
				{...props}
				dispose={null}
			>
				<group
					name="javascript"
					position={[-5.573277, 2.62992287, -7.69507504]}
					rotation={[1.27409045, 0, 0]}
				>
					<mesh
						name="Curve001"
						geometry={nodes.Curve001.geometry}
						material={materials['Material.004']}
					/>
					<mesh
						name="Curve001_1"
						geometry={nodes.Curve001_1.geometry}
						material={materials['Material.005']}
					/>
				</group>
				<group
					name="typescript"
					position={[-5.73905706, 2.3415947, -6.83017063]}
					rotation={[0, -0.50191032, 0]}
				>
					<mesh
						name="Curve011"
						geometry={nodes.Curve011.geometry}
						material={materials.white2}
					/>
					<mesh
						name="Curve011_1"
						geometry={nodes.Curve011_1.geometry}
						material={materials.blue}
					/>
				</group>
				<group
					name="tailwind"
					position={[-7.36963558, 2.34726548, -6.54181814]}
					rotation={[0, 1.06228973, 0]}
				>
					<mesh
						name="Curve014"
						geometry={nodes.Curve014.geometry}
						material={materials.blue}
					/>
					<mesh
						name="Curve014_1"
						geometry={nodes.Curve014_1.geometry}
						material={materials['Material.007']}
					/>
				</group>
				<mesh
					name="nodejs"
					geometry={nodes.nodejs.geometry}
					material={materials.flower}
					position={[-4.40903139, 2.59915376, -7.04209518]}
					rotation={[1.05518983, -0.09554982, -1.40402168]}
				/>
				<mesh
					name="react001"
					geometry={nodes.react001.geometry}
					material={materials.blue}
					position={[-6.17153072, 2.55541062, -7.43492556]}
					rotation={[0, -1.10458339, 0]}
				/>
				<mesh
					name="threejs"
					geometry={nodes.threejs.geometry}
					material={materials['material_0.001']}
					position={[-7.41314745, 2.29764175, -5.54585266]}
					rotation={[0, 0.49330063, 0]}
				/>
				<group
					name="aws"
					position={[-7.18623066, 2.34544086, -4.43994331]}
					rotation={[-Math.PI, 0.36127987, -Math.PI]}
				>
					<mesh
						name="Curve003"
						geometry={nodes.Curve003.geometry}
						material={materials['curtains.001']}
					/>
					<mesh
						name="Curve003_1"
						geometry={nodes.Curve003_1.geometry}
						material={materials['SVGMat.008']}
					/>
				</group>
				<mesh
					name="git"
					geometry={nodes.git.geometry}
					material={materials['SVGMat.006']}
					position={[-7.32093906, 2.54786134, -5.49276161]}
					rotation={[Math.PI / 2, 0.26179943, Math.PI]}
				/>
				<mesh
					name="github"
					geometry={nodes.github.geometry}
					material={materials['SVGMat.010']}
					position={[-6.83830261, 2.29407144, -6.94681072]}
					rotation={[0, 0.34778878, 0]}
				/>
				<group
					name="blender"
					position={[-7.03378916, 2.49286795, -5.74791574]}
					rotation={[1.34956601, 0.10460084, 1.1361751]}
				>
					<mesh
						name="Curve"
						geometry={nodes.Curve.geometry}
						material={materials['SVGMat.002']}
					/>
					<mesh
						name="Curve_1"
						geometry={nodes.Curve_1.geometry}
						material={materials['SVGMat.003']}
					/>
					<mesh
						name="Curve_2"
						geometry={nodes.Curve_2.geometry}
						material={materials['SVGMat.004']}
					/>
				</group>
			</group>
		</>
	);
}

useGLTF.preload('./models/logos.glb');
