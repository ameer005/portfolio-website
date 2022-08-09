import React from "react";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <main
      className="font-calibre min-h-screen bg-colorPrimaryDark2 text-colorNeutral
                flex flex-col items-center pb-10 px-16 sm:px-10"
    >
      <Header />

      <section className="w-full max-w-[63rem]">
        <Homepage />
      </section>
    </main>
  );
};

export default App;
