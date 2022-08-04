import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <main className="py-7 px-16 xl:px-0 flex items-center justify-between w-full  mb-7">
      <div className="text-2xl">logo</div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-colorPrimaryDark1/40 backdrop-blur-sm z-20 ${
          !openNav && "hidden"
        } `}
      ></div>
      <ul
        className={`flex gap-7 lg:gap-10 items-center font-sfMono text-sm z-30 mobile-nav ${
          openNav ? "lg:translate-x-[0rem]" : "lg:translate-x-[30rem]"
        } `}
      >
        <li>
          <a href="/#" className="flex lg:flex-col gap-1 items-center">
            <div className="text-colorAccent">01.</div>
            <div className="nav-links ut-animation">About</div>
          </a>
        </li>
        {/* <li>
          <a href="/#" className="flex lg:flex-col gap-1 items-center">
            <div className="text-colorAccent">02.</div>
            <div className="nav-links ut-animation">Experience</div>
          </a>
        </li> */}
        <li>
          <a href="/#" className="flex lg:flex-col gap-1 items-center">
            <div className="text-colorAccent">02.</div>
            <div className="nav-links ut-animation">Projects</div>
          </a>
        </li>
        <li>
          <a href="/#" className="flex lg:flex-col gap-1 items-center">
            <div className="text-colorAccent">03.</div>
            <div className="nav-links ut-animation">Contact</div>
          </a>
        </li>
        <li>
          <button className="text-colorAccent px-4 lg:px-8 py-[8px] border border-colorAccent rounded-md hover:bg-colorAccent/5 ut-animation">
            Resume
          </button>
        </li>
      </ul>
      <GiHamburgerMenu
        onClick={() => setOpenNav((prev) => !prev)}
        className="h-8 w-8 hidden lg:block cursor-pointer z-40"
      />
    </main>
  );
};

export default Header;
