import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

import AnimatedRoutes from "./components/Routes/AnimatedRoutes/AnimatedRoutes";

const App = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openNav]);

  return (
    <main
      className={`font-calibre min-h-screen bg-colorPrimaryDark2 text-colorNeutral flex flex-col items-center pb-10 px-16 sm:px-10`}
    >
      <Header openNav={openNav} setOpenNav={setOpenNav} />

      <section className="w-full max-w-[63rem]">
        <AnimatedRoutes />
      </section>
    </main>
  );
};

export default App;
