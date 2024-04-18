import React from 'react';
import gsap from 'gsap';

const Navbar = React.forwardRef((props, ref) => {
	const navList = [
		{
			label: 'Home',
			position:
				screen.width < 1280 ? { x: 24, y: 12, z: 32 } : { x: 10, y: 6, z: 15 },
			target: { x: -2, y: 1, z: -2 },
		},
		{
			label: 'About',
			position:
				screen.width < 1280 ? { x: 2, y: 5.5, z: -7 } : { x: 0.5, y: 3.5, z: -6.2 },
			target: { x: -1.4, y: 2.7, z: -5.6 },
		},
		{
			label: 'Skills',
			position:
				screen.width < 1280 ? { x: 0, y: 8, z: 0 } : { x: -3.3, y: 4.25, z: -3.4 },
			target: { x: -3.4, y: 4.2, z: -3.5 },
		},
		{
			label: 'Contact',
		},
	];

	

	const handleButtonClick = (nav) => {
		if (nav.position && nav.target) {
			gsap.to(ref.current.object.position, {
				duration: 1,
				x: nav.position.x,
				y: nav.position.y,
				z: nav.position.z,
				ease: 'power4.inOut',
			});
			gsap.to(ref.current.target, {
				duration: 1,
				x: nav.target.x,
				y: nav.target.y,
				z: nav.target.z,
				ease: 'power4.inOut',
			});
		}
	};

	return (
		<header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center tracking-tight uppercase">
			<nav className="flex w-full screen-max-width ">
				<div className="flex flex-1 justify-center gap-0 lg:gap-12 text-sm lg:text-base ">
					{navList.map((nav, label) => (
						<div
							onClick={() => handleButtonClick(nav)}
							className="flex items-center px-4 p-1 cursor-pointer hover:text-zinc-300 transition-all"
							key={label}
						>
							{nav.label} {/* Render the label */}
						</div>
					))}
				</div>
			</nav>
		</header>
	);
});

export default Navbar;
