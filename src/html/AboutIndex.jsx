import React from "react";

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
        className={`h-[532px] w-[938px] touch-none overflow-auto bg-slate-950 text-slate-50`}
      >
        <div className="flex flex-col gap-8 p-4">
          <div className="flex flex-col gap-0">
            <h1 className="text-7xl">Fatih Yonucuoğlu</h1>
            <h1 className="text-xl">Web & Software Developer</h1>
          </div>
          <div>
            <h1 className="text-end text-xl">
              Currently a Front-end Intern at{" "}
              <a
                target="_blank"
                href="https://example.com"
                className="underline"
              >
                Placeholder
              </a>
            </h1>
            <h1 className="text-end text-xl">
              Working remotely from Istanbul, Turkey.
            </h1>
          </div>
          <div>
            <p className="flex flex-col gap-4 py-4 text-3xl">
              <span>
                With experience in the industry, I am developing both front-end
                and back-end technologies.
              </span>
              <span>
                I'm captivated by the endless potential of web development,
                aiming for a quiet yet profound influence on user interactions.
              </span>
            </p>
          </div>
          {/* <div className="mt-12">
            <h2 className="text-4xl">Projects</h2>
            <div className="grid grid-cols-2 gap-4 py-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-xl border-2 border-transparent bg-gray-900 p-6 transition-all lg:hover:border-white"
                >
                  <h3 className="text-2xl text-white">{project.title}</h3>
                  <p className="mt-4 text-white">{project.description}</p>
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
