import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import entertainmentApp from "../assets/entertainment-web-app.png";
import audiophileImg from "../assets/audiophille-e-commerse.png";
import invoiceImg from "../assets/invoice-app.png";

const Homepage = () => {
  return (
    <main>
      <section className=" h-[87vh] ">
        <h3 className="text-base font-sfMono text-colorAccent mb-7">
          Hi, my name is
        </h3>
        <h1 className="text-7xl font-semibold text-colorSecondaryLight2 mb-3">
          Ameer khan.
        </h1>
        <h1 className="text-7xl font-semibold text-colorSecondary max-w-[15ch] mb-3 leading-[.9]">
          Frontend Web Developer
        </h1>

        <p className="max-w-[51ch] leading-7 text-xl text-colorSecondary mb-16">
          I'm a frontend web Developer who uses modern technologies to build
          beautiful and scalable Web Applications
        </p>

        <a
          href="https://github.com/ameer005?tab=repositories"
          className="text-sm font-sfMono text-colorAccent py-[18px] px-8 border border-colorAccent rounded-md hover:bg-colorAccent/5 ut-animation"
        >
          Check out my Work
        </a>
      </section>

      {/* Section Projects */}
      <section className="">
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
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          harum quaerat fugiat, fugit nam enim voluptates qui quas ex, quisquam
          atque omnis, excepturi consequatur quidem voluptatem nihil
          reprehenderit dignissimos libero."
            github="https://github.com/ameer005/entertainment-web-app"
            live="https://entertainment-web-app-005.netlify.app/"
          />
          <ProjectCard
            title="Audiophile E-commerce store"
            image={audiophileImg}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          harum quaerat fugiat, fugit nam enim voluptates qui quas ex, quisquam
          atque omnis, excepturi consequatur quidem voluptatem nihil
          reprehenderit dignissimos libero."
            github="https://github.com/ameer005/audiophile-e-commerce-website"
            live="https://audiophile-ecommerce-ameer005.netlify.app/"
          />
          <ProjectCard
            title="Invoice App"
            image={invoiceImg}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          harum quaerat fugiat, fugit nam enim voluptates qui quas ex, quisquam
          atque omnis, excepturi consequatur quidem voluptatem nihil
          reprehenderit dignissimos libero."
            github="https://github.com/ameer005/invoice-app"
            live="https://invoice-ameer005.netlify.app/"
          />
        </div>
      </section>
    </main>
  );
};

export default Homepage;
