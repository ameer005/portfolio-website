import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Homepage from "../../../pages/Homepage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default AnimatedRoutes;
