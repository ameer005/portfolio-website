import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ title, description, image, live, github }) => {
  return (
    <main>
      <section className="grid grid-cols-2 lg:grid-cols-1 items-center p-4 border border-colorAccent/50 rounded-[5px] lg:mb-4">
        <div className=" rounded-[5px] relative overflow-hidden  overlay hover:after:opacity-0 hover:before:opacity-0 ut-animation ">
          <img src={image} alt="project" />
        </div>
        <div className="px-10 py-7 lg:hidden">
          <div className="text-xs font-sfMono text-colorAccent mb-3">
            Featured Project
          </div>
          <h3 className="text-3xl text-colorSecondaryLight2 font-semibold mb-6">
            {title}
          </h3>

          <p className="leading-6 text-lg text-colorSecondary mb-7">
            {description}
          </p>

          <div className="flex items-center gap-3 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={github}
              className="text-sm font-sfMono text-colorAccent py-2 w-full max-w-[6rem] border border-colorAccent rounded-md hover:bg-colorAccent/5 ut-animation text-center"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={live}
              className="text-sm font-sfMono text-colorAccent py-2 w-full max-w-[6rem] border border-colorAccent rounded-md hover:bg-colorAccent/5 ut-animation text-center"
            >
              Live
            </a>
          </div>
        </div>
      </section>

      <section className="lg:flex items-center justify-between hidden ">
        <h3 className="text-xl text-colorSecondaryLight2 font-semibold  ">
          {title}
        </h3>

        <div className="flex gap-3 items-center">
          <a target="_blank" rel="noopener noreferrer" href={github}>
            <AiFillGithub className="h-6 w-6 hover:text-colorAccent ut-animation" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={live}>
            <BiLinkExternal className="h-6 w-6 hover:text-colorAccent ut-animation" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProjectCard;
