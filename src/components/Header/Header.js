import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";

import { HashLink } from "react-router-hash-link";

const Header = ({ openNav, setOpenNav }) => {
  const menuRef = useRef();
  const menuBtnRef = useRef();

  // closing menu
  useEffect(() => {
    const handler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !menuBtnRef.current.contains(e.target)
      )
        setOpenNav(false);
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <main className="py-7 px-16 xl:px-0 flex items-center justify-between w-full  mb-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: ".3" }}
        className="text-2xl"
      >
        logo
      </motion.div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-colorPrimaryDark1/40 backdrop-blur-sm z-20 ${
          !openNav && "hidden"
        } `}
      ></div>
      <ul
        ref={menuRef}
        className={`flex gap-7 lg:gap-10 items-center font-sfMono text-sm z-30 mobile-nav ${
          openNav ? "lg:translate-x-[0rem]" : "lg:translate-x-[40rem]"
        } `}
      >
        <motion.li
          initial={{ y: "-45px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: ".4" }}
        >
          <HashLink
            onClick={() => closeNav()}
            smooth
            to={"#about"}
            className="flex lg:flex-col gap-1 items-center"
          >
            <div className="text-colorAccent">01.</div>
            <div className="nav-links ut-animation">About</div>
          </HashLink>
        </motion.li>
        <motion.li
          initial={{ y: "-45px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: ".5" }}
        >
          <HashLink
            onClick={() => closeNav()}
            to="#projects"
            smooth
            className="flex lg:flex-col gap-1 items-center"
          >
            <div className="text-colorAccent">02.</div>
            <div className="nav-links ut-animation">Projects</div>
          </HashLink>
        </motion.li>
        <motion.li
          initial={{ y: "-45px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: ".6" }}
        >
          <HashLink
            onClick={() => closeNav()}
            to={"#contact"}
            smooth
            className="flex lg:flex-col gap-1 items-center"
          >
            <div className="text-colorAccent">03.</div>
            <div className="nav-links ut-animation">Contact</div>
          </HashLink>
        </motion.li>
        <motion.li
          initial={{ y: "-45px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: ".7" }}
        >
          <button className="text-colorAccent px-4 lg:px-8 py-[8px] border border-colorAccent rounded-md hover:bg-colorAccent/5 ut-animation">
            Resume
          </button>
        </motion.li>
      </ul>
      <div ref={menuBtnRef} className="hidden lg:block z-40">
        <GiHamburgerMenu
          onClick={() => setOpenNav((prev) => !prev)}
          className="h-8 w-8 cursor-pointer  text-colorAccent"
        />
      </div>
    </main>
  );
};

export default Header;
