import { Html } from '@react-three/drei';
import { svgs } from '../utils/svg';
import { useState } from 'react';
import '../styles/annotation.css';

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
			<Html
				position={position}
				wrapperClass="annotation"
				center
				occlude
				distanceFactor={distanceFactor}
			>
				<div
					onClick={onClick}
					onMouseEnter={() => {
						handleOpen();
					}}
					onMouseLeave={() => {
						handleClose();
					}}
					className={isOpen ? `p-4 transition-all ` : 'p-2 transition-all '}
				>
					<div>
						<span className="flex gap-3 items-center">
							{isOpen ? title : '' || null} {svgs[selected]}
						</span>
						{isOpen ? (
							<div className={childSelected ? `flex mt-2` : null}>
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
