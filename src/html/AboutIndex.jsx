import React from 'react';

const AboutIndex = () => {
	// const projects = [
	// 	{
	// 		title: 'Graduation Project',
	// 		description: 'Taking attendance using facial recognition.',
	// 	},
	// 	{
	// 		
	// 	},
	// ];

	return (
		<>
			<div
				className={`text-slate-50 bg-slate-950 overflow-auto w-[938px] h-[532px] touch-none`}
			>
				<div className="p-4 flex flex-col gap-8">
					<div className="flex flex-col gap-0">
						<h1 className="text-7xl">Fatih Yonucuoğlu</h1>
						<h1 className="text-xl">Web & Software Developer</h1>
					</div>
					<div>
						<h1 className="text-xl text-end">
							Currently a Front-end Intern at{' '}
							<a
								target="_blank"
								href="https://example.com"
								className="underline"
							>
								Placeholder
							</a>
						</h1>
						<h1 className="text-xl text-end">
							Working remotely from Istanbul, Turkey.
						</h1>
					</div>
					<div>
						<p className="text-3xl flex flex-col gap-4 py-4">
							<span>
								With experience in the industry, I am developing both front-end and
								back-end technologies.
							</span>
							<span>
								I'm captivated by the endless potential of web development, aiming for a
								quiet yet profound influence on user interactions.
							</span>
						</p>
					</div>
					{/* <div className="mt-12">
						<h2 className="text-4xl">Projects</h2>
						<div className="grid grid-cols-2 gap-4 py-2">
							{projects.map((project, index) => (
								<div
									key={index}
									className="bg-gray-900 p-6 rounded-xl border-2 border-transparent lg:hover:border-white transition-all"
								>
									<h3 className="text-2xl text-white">{project.title}</h3>
									<p className="text-white mt-4">{project.description}</p>
								</div>
							))}
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default AboutIndex;
