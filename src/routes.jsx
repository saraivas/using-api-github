import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/index";
import RepositoriesPage from "./pages/RepositoriesPage/index";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/:login/repositories" element={<RepositoriesPage />} />
      <Route path="/" element={<MainPage />} />
      {/* /login/repositories */}
    </Routes>
  );
}
