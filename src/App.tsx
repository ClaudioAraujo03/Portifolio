import React, { useState, FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Cursor } from "./components/Cursor";
import Sidebar from "./components/Sidebar";

export const App: FC = () => {
  const [enableTrail, setEnableTrail] = useState<boolean>(false);

  const toggleTrail = () => {
    setEnableTrail(!enableTrail);
  };

  return (
    <div className="App">

      <Cursor enableTrail={enableTrail} />
      <Router>
        <Sidebar />
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};