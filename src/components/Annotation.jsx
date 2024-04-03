import { Html } from '@react-three/drei';
import { svgs } from '../utils/svg';
import { useState } from 'react';
import '../styles/annotation.css';

const Annotation = ({ position, selected, title }) => {
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
				className={isOpen ? `p-4 rounded-none transition-all duration-100` : 'p-1 transition-all duration-100'}
				onMouseEnter={() => {
					handleOpen();
				}}
				onMouseLeave={() => {
					handleClose();
				}}
			>
        <span className='flex flex-row items-center'>{isOpen ? title : '' || null} {svgs[selected]}</span>
				
			</div>
		</Html>
	);
};

export default Annotation;
