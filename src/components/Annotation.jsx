import { Html } from '@react-three/drei';
import { svgs } from '../utils/svg';
import { useState } from 'react';
import '../styles/annotation.css';
import { useThree } from '@react-three/fiber';

const Annotation = ({
	position,
	selected,
	title,
	children,
	childSelected,
	distanceFactor = 10,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const camera = useThree((state) => state.camera);

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
				distanceFactor={distanceFactor}
				center
				occlude
			>
				<div
					onMouseEnter={() => {
						handleOpen();
					}}
					onMouseLeave={() => {
						handleClose();
					}}
					className={
						isOpen
							? `py-6 px-6 transition-all duration-150`
							: 'p-3 transition-all duration-150'
					}
				>
					<div
						className={
							isOpen
								? `rounded-none transition-all duration-150`
								: 'transition-all duration-150'
						}
					>
						<span className="flex flex-row gap-3 items-center justify-center">
							{isOpen ? title : '' || null} {svgs[selected]}
						</span>
						{isOpen ? (
							<div className={children ? `mt-2` : null}>
								<div className="flex flex-row items-center">
									{children}
									{svgs[childSelected]}
								</div>
							</div>
						) : null}
					</div>
				</div>
			</Html>
		</>
	);
};

export default Annotation;
