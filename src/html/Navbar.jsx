// Navbar.jsx
import React from 'react';

const Navbar = React.forwardRef((ref, props) => {
	const navList = ['Home', 'About', 'Skills', 'Contact'];

	return (
		<header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center tracking-tight uppercase">
			<nav className="flex w-full screen-max-width ">
				<div className="flex flex-1 justify-center gap-0 lg:gap-12 text-sm lg:text-base ">
					{navList.map((nav) => (
						<div
							onClick={() => {
								console.log(ref.current);
							}}
							className=" px-4 p-1 cursor-pointer hover:text-zinc-300 transition-all"
							key={nav}
						>
							{nav}
						</div>
					))}
				</div>
			</nav>
		</header>
	);
});

export default Navbar;
