import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard/ProjectCard";
import entertainmentApp from "../assets/entertainment-web-app.png";
import audiophileImg from "../assets/audiophille-e-commerse.png";
import invoiceImg from "../assets/invoice-app.png";

const Homepage = () => {
  return (
    <main className="flex flex-col">
      <section className=" h-[87vh] ">
        <motion.h3
          initial={{ y: "25px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: ".3", delay: "1" }}
          className="text-base font-sfMono text-colorAccent mb-7"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ y: "25px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: ".4", delay: "1" }}
          className="text-7xl sm:text-6xl font-semibold text-colorSecondaryLight2 mb-3"
        >
          Ameer khan.
        </motion.h1>
        <motion.h1
          initial={{ y: "25px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: ".5", delay: "1" }}
          className="text-7xl sm:text-6xl font-semibold text-colorSecondary max-w-[15ch] mb-3 leading-[.9]"
        >
          Frontend Web Developer
        </motion.h1>

        <motion.p
          initial={{ y: "25px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: ".6", delay: "1" }}
          className="max-w-[51ch] leading-7 text-xl md:text-2xl text-colorSecondary mb-16"
        >
          I'm a frontend web Developer who uses modern technologies to build
          beautiful and scalable Web Applications
        </motion.p>

        <motion.a
          initial={{ y: "25px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: ".6", delay: "1" }}
          href="https://github.com/ameer005?tab=repositories"
          className="text-sm font-sfMono text-colorAccent py-[18px] px-8 border border-colorAccent rounded-md hover:bg-colorAccent/5 ut-animation"
        >
          Check out my Work
        </motion.a>
      </section>

      {/* Section Projects */}
      <section className="mb-48 sm:mb-36" id="projects">
        <div className="flex items-center gap-4 mb-16">
          <div className="flex gap-3 items-center font-sfMono">
            <div className="text-xl text-colorAccent ">01.</div>
            <div className="text-3xl font-calibre font-semibold text-colorSecondaryLight2 tracking-wider mt-2 ">
              Projects
            </div>
          </div>
          <div className="bg-colorSecondaryDark/50 w-full max-w-[23rem] h-[1px]"></div>
        </div>

        {/* projects */}
        <div className="flex flex-col gap-14">
          <ProjectCard
            title="Entertainment Web App"
            image={entertainmentApp}
            description="A app where you can get all the details about your favorite TV Servies/Movies. You can also see which movies are trending right now and much more."
            github="https://github.com/ameer005/entertainment-web-app"
            live="https://entertainment-web-app-005.netlify.app/"
          />
          <ProjectCard
            title="Audiophile E-commerce store"
            image={audiophileImg}
            description="Audiophile is an E-commerce store for music enthusiasts who wants to enjoy listening to music in high quality."
            github="https://github.com/ameer005/audiophile-e-commerce-website"
            live="https://audiophile-ecommerce-ameer005.netlify.app/"
          />
          <ProjectCard
            title="Invoice App"
            image={invoiceImg}
            description="A Web App for taking care of all your invoices. You can create new invoice, mark them as paid or pending, see all the details related to them etc."
            github="https://github.com/ameer005/invoice-app"
            live="https://invoice-ameer005.netlify.app/"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="mb-48 sm:mb-36 self-center" id="about">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex gap-3 items-center font-sfMono">
            <div className="text-xl text-colorAccent ">02.</div>
            <div className="text-3xl font-calibre font-semibold text-colorSecondaryLight2 tracking-wider mt-2 w-[9ch]">
              About Me
            </div>
          </div>
          <div className="bg-colorSecondaryDark/50 w-full max-w-[23rem] h-[1px]"></div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-4 text-lg md:text-2xl text-colorSecondary max-w-[38rem] ">
            <p>
              Hello, I'm{" "}
              <span className="text-colorAccent tracking-wide">Ameer Khan</span>
              , a Frontend Web Developer.
            </p>

            <p>
              When it comes to business, first impressions matter, and good
              website design is the key to capitalizing on them. An excellent
              site is not judged solely on its looks, but on its functionality
              and usability as well. My experience as a programmer allows me to
              come up with intelligent solutions to technical challenges, while
              at the same time designing sleek and visually appealing websites.
              Aside from having extensive knowledge of recognized technical
              standards, I am conversant with modern building practices.
            </p>

            <div>
              <div className="mb-5">
                Here are a few technologies I’ve been working with recently:
              </div>

              <ul className="grid grid-cols-2 gap-y-3 max-w-[25rem] font-sfMono">
                <li className="flex gap-1 items-center">
                  <div>
                    <AiOutlineCaretRight className="h-3 w-3 text-colorAccent" />
                  </div>
                  <div className="text-sm md:text-base">Javascript</div>
                </li>
                <li className="flex gap-1 items-center">
                  <div>
                    <AiOutlineCaretRight className="h-3 w-3 text-colorAccent" />
                  </div>
                  <div className="text-sm md:text-base">Node.js</div>
                </li>
                <li className="flex gap-1 items-center">
                  <div>
                    <AiOutlineCaretRight className="h-3 w-3 text-colorAccent" />
                  </div>
                  <div className="text-sm md:text-base">React</div>
                </li>
                <li className="flex gap-1 items-center">
                  <div>
                    <AiOutlineCaretRight className="h-3 w-3 text-colorAccent" />
                  </div>
                  <div className="text-sm md:text-base">Tailwind css</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="flex flex-col items-center  mb-48 sm:mb-36 self-center text-center"
        id="contact"
      >
        <div className="flex items-center gap-4 mb-5">
          <div className="flex gap-3 items-center font-sfMono">
            <div className="text-base text-colorAccent ">03.</div>
            <div className="text-base text-colorAccent ">What’s Next?</div>
          </div>
        </div>
        <h2 className="text-6xl lg:text-5xl text-colorSecondaryLight2 font-semibold mb-6">
          Get In Touch
        </h2>
        <p className="leading-6 text-xl md:text-2xl text-colorSecondary mb-10 w-full max-w-[55ch] ">
          Although I’m currently looking for new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <a
          rel="noopener noreferrer"
          href="mailto:ameerkhan74164@gmail.com"
          className="text-sm font-sfMono text-colorAccent py-[18px] px-8 border border-colorAccent rounded-md hover:bg-colorAccent/5 ut-animation"
        >
          Say Hello
        </a>
      </section>

      <p className="font-sfMono self-center text-xs font-semibold text-colorSecondary">
        Built by Ameer Khan
      </p>
    </main>
  );
};

export default Homepage;
