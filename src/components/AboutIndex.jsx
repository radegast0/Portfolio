import React, { useState } from 'react';

const AboutIndex = () => {
	const isAbout = true;
	return (
		<>
			<div className="text-black border-4 overflow-y-scroll overflow-x-auto w-[900px] h-[490px] touch-pan-y">
				<div className="p-4 flex flex-col gap-8 text-[#141E46]">
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
					<a
						target="_blank"
						href="https://docs.google.com/forms/d/e/1FAIpQLScjKWKeohtRaUrtlzvJwkaIKbXJMPaEfrVtdhFMUt9l3RaZaQ/viewform?usp=sf_link"
						className="text-2xl text-end underline"
					>
						Contact form{' '}
					</a>
					<div>
						<p className="text-3xl flex flex-col gap-4 py-4">
							<span>
								With experience in the industry, I have developed both front-end and
								back-end technologies and am familiar with the MERN stack.
							</span>
							<span>
								I'm captivated by the endless potential of web development, aiming for a
								quiet yet profound influence on user interactions. I believe in infusing
								creativity into every pixel and turning it into an artistic expression.
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutIndex;
