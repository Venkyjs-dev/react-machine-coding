import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FeaturePage from "../pages/FeaturePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features/:id" element={<FeaturePage />} />
      <Route path="*" element={<div>Page Not Found!</div>} />
    </Routes>
  );
};

export default AppRoutes;
