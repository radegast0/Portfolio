import React, { useEffect } from 'react';
import gsap from 'gsap';
import { svgs } from '../utils/svg';
import { useGSAP } from '@gsap/react';

const Navbar = React.forwardRef(({ setIsAbout }, ref) => {
	useGSAP(() => {
		gsap.from('.nav-item', {
			delay: .8,
			opacity: 1,
			duration: 1,
			y: -50,
			ease: 'power4.inOut',
		});
	});

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
				screen.width < 1280
					? { x: 1, y: 3.5, z: -6.35 }
					: { x: 0, y: 3.3, z: -6.0 },
			target: { x: -2, y: 2.8, z: -5.45 },
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
		if (nav.label === 'About') {
			setIsAbout(true);
		} else {
			setIsAbout(false);
		}
	};

	return (
		<>
			<header className="w-full nav-item py-5 sm:px-10 px-5 flex justify-between items-center uppercase">
				<nav className="flex w-full screen-max-width ">
					<div className="flex flex-1 justify-center gap-0 lg:gap-12">
						{navList.map((nav, label) => (
							<div
								onClick={() => handleButtonClick(nav)}
								className="flex items-center px-4 p-1 cursor-pointer hover:text-zinc-300 text-xs md:text-base lg:text-xl transition-all"
								key={label}
							>
								{nav.label === 'Contact' ? (
									<>
										<a
											className="flex items-center"
											target="_blank"
											href="https://docs.google.com/forms/d/e/1FAIpQLScjKWKeohtRaUrtlzvJwkaIKbXJMPaEfrVtdhFMUt9l3RaZaQ/viewform"
										>
											{nav.label}
											<span className="scale-75 md:scale-90 lg:scale-100">{svgs[2]}</span>
										</a>
									</>
								) : (
									nav.label
								)}
							</div>
						))}
					</div>
				</nav>
			</header>
		</>
	);
});

export default Navbar;
