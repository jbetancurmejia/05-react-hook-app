import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { MainApp } from "./MainApp";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route  path="*" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
};
