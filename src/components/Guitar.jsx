import { useGLTF } from '@react-three/drei';
import Annotation from './Annotation';

export default function Guitar(props) {
	const { nodes, materials } = useGLTF('./models/guitar.glb');
	return (
		<>
			<Annotation
				position={[-6, 2.4, 1.2]}
				selected={0}
				title={
					<a
						className=" border-b-[2px] rounded-sm mr-4 border-transparent hover:border-[#00da5b93] text-[#00da5b] transition-all "
						target="_blank"
						href="https://open.spotify.com/user/mot%C3%B6rkafa?si=ueGATfW7SXuE12f1i54p9w"
					>
						visit
					</a>
				}
			/>

			<group
				position={[-0, 0, 0]}
				{...props}
				dispose={null}
			>
				<group
					position={[0, 0.264, -12.841]}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<group rotation={[Math.PI / 2, 0, 0]}>
						<group
							position={[-0.028, -0.003, 0.256]}
							rotation={[-Math.PI / 2, 0, 0.495]}
						>
							<mesh
								geometry={nodes.Guitar_Stand_Guitar_Stand_0.geometry}
								material={materials.Guitar_Stand}
								position={nodes.Guitar_Stand_Guitar_Stand_0.position}
								rotation={nodes.Guitar_Stand_Guitar_Stand_0.rotation}
							/>
						</group>
					</group>
				</group>
				<group
					position={[0, 0.264, 0]}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<group position={[-12.968, -5.228, -39.37]}>
						<mesh
							geometry={nodes.Object_3001.geometry}
							material={materials['Gibson_A1_LOD001_Mat.001']}
							position={nodes.Object_3001.position}
							rotation={nodes.Object_3001.rotation}
						/>
					</group>
				</group>
			</group>
		</>
	);
}

useGLTF.preload('./models/guitar.glb');
