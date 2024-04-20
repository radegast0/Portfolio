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
