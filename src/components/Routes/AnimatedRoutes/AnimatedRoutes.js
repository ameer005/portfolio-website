import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Homepage from "../../../pages/Homepage";

import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </ScrollToTop>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
