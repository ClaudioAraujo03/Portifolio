import React, { useState, FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Cursor } from "./components/Cursor";
import Sidebar from "./components/Sidebar";
import { useTheme } from "./hooks/useTheme";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [enableTrail, setEnableTrail] = useState<boolean>(false);

  const toggleTrail = () => {
    setEnableTrail(!enableTrail);
  };

  return (
    <div className="App">
      <Cursor enableTrail={enableTrail} />
      <Router>
        <Sidebar />
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/home" element={<Home theme={theme} />} />
        </Routes>
      </Router>
    </div>
  );
};