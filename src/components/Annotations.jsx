import Annotation from './Annotation';

const Annotations = () => {
	return (
		<>
			<Annotation
				position={[-6, 2.4, 1.2]}
				selected={0}
				title={<p className="">Spotify</p>}
				childSelected={1}
				distanceFactor={10}
			>
				<a
					target="_blank"
					href="https://open.spotify.com/user/mot%C3%B6rkafa?si=ueGATfW7SXuE12f1i54p9w"
				>
					visit
				</a>
			</Annotation>
			<Annotation
				position={[-6, 3.3, -6]}
				selected={3}
				title="Skills"
				childSelected={2}
			>
				<a
					target="_blank"
					href="https://github.com/radegast0"
				>
					GitHub
				</a>
			</Annotation>
			<Annotation
				distanceFactor={9}
				position={[-7, 6, -1.7]}
				selected={4}
				title={'Projects'}
			/>
		</>
	);
};

export default Annotations;
