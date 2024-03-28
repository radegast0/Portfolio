const Navbar = () => {
	const navLists = ['Home', 'About', 'Skills', 'Contact'];

	return (
		<header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
			<nav className="flex w-full screen-max-width ">
				<div className="flex flex-1 justify-center gap-0 lg:gap-12 text-sm lg:text-base ">
					{navLists.map((nav) => (
						<div
							className=" px-4 p-1 cursor-pointer hover:text-white transition-all"
							key={nav}
						>
							{nav}
						</div>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
