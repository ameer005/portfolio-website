import React from "react";

const Header = () => {
  return (
    <main className="py-7 px-16 flex items-center justify-between w-full mb-7">
      <div className="text-2xl">logo</div>

      <ul className="flex gap-7 items-center font-sfMono text-sm">
        <li>
          <a href="/#" className="flex gap-1 items-center">
            <div className="text-colorAccent">01.</div>
            <div className="nav-links ut-animation">About</div>
          </a>
        </li>
        <li>
          <a href="/#" className="flex gap-1 items-center">
            <div className="text-colorAccent">02.</div>
            <div className="nav-links ut-animation">Experience</div>
          </a>
        </li>
        <li>
          <a href="/#" className="flex gap-1 items-center">
            <div className="text-colorAccent">03.</div>
            <div className="nav-links ut-animation">Work</div>
          </a>
        </li>
        <li>
          <a href="/#" className="flex gap-1 items-center">
            <div className="text-colorAccent">04.</div>
            <div className="nav-links ut-animation">Contact</div>
          </a>
        </li>
        <li>
          <button className="text-colorAccent px-4 py-[8px] border border-colorAccent rounded-md hover:bg-colorAccent/5 ut-animation">
            Resume
          </button>
        </li>
      </ul>
    </main>
  );
};

export default Header;
