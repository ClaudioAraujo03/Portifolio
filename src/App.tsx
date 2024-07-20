import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Cursor } from "./components/Cursor";
import Sidebar from "./components/Sidebar";

export const App: React.FC = () => {
  const [styleWeb, setStyleWeb] = useState<"dark-mode" | "light-mode">("dark-mode");
  const [enableTrail, setEnableTrail] = useState<boolean>(false);

  const toggleTrail = () => {
    setEnableTrail(!enableTrail);
  };

  useEffect(() => {
    document.body.className = styleWeb;
  }, [styleWeb]);

  const toggleTheme = () => {
    setStyleWeb((prevTheme) => (prevTheme === "light-mode" ? "dark-mode" : "light-mode"));
  };

  return (
    <div className="App">
      <Cursor enableTrail={enableTrail} />
      <Router>
        <Sidebar />
        <NavBar toggleTheme={toggleTheme} styleWeb={styleWeb} />
        <Routes>
          <Route path="/home" element={<Home styleWeb={styleWeb} />} />
        </Routes>
      </Router>
    </div>
  );
};
