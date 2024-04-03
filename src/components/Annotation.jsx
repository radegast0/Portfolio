import { Html } from '@react-three/drei';
import { svgs } from '../utils/svg';
import { useState } from 'react';
import '../styles/annotation.css';

const Annotation = ({ position, selected, title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Html
			position={position}
			wrapperClass="annotation"
			distanceFactor={8}
			center
      occlude
		>
			<div
				className={isOpen ? `px-8 py-6 rounded-none transition-all duration-200` : 'p-3 transition-all duration-200'}
				onMouseEnter={() => {
					handleOpen();
				}}
				onMouseLeave={() => {
					handleClose();
				}}
			>
        <span className='flex flex-row items-center justify-center'>{isOpen ? title : '' || null} {svgs[selected]}</span>
        {isOpen? <div className={children ? `mt-2` : null + 'flex flex-row items-center mx-auto'}>{children}  </div> : null}
			</div>
		</Html>
	);
};

export default Annotation;
