import React, { useState } from "react";
import "../styles/components/NavBar.css";
import { MdHome, MdPerson, MdWork, MdContacts } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ toggleTheme, styleWeb }) => {
  const [sectionSelected, setSectionSelected] = useState("home");
  const location = useLocation("/");

  return (
    <div>
      {styleWeb === "dark-mode" ? (
        <div onClick={toggleTheme} className="moon">
          <div className="star star1"></div>
          <div className="star star2"></div>
          <div className="star star3"></div>
          <div className="star star4"></div>
          <div className="star star5"></div>
          <div className="star star6"></div>
        </div>
      ) : (
        <div className="sun-container">
          <div onClick={toggleTheme} className="sun"></div>
          <div className="cloud cloud-left"></div>
          <div className="cloud cloud-right"></div>
        </div>
      )}
      <div className="navbar-container">
        <div
          className={`group-button ${
            sectionSelected === "home" ? "active" : ""
          }`}
        >
          <Link to="/home" onClick={() => setSectionSelected("home")}>
            <MdHome className="icon" />
            {sectionSelected === "home" && (
              <h6 className="slide-in-fwd-right">Home</h6>
            )}
          </Link>
        </div>
        <div
          className={`group-button ${
            sectionSelected === "sobre" ? "active" : ""
          }`}
        >
          <Link to="/sobre" onClick={() => setSectionSelected("sobre")}>
            <MdPerson className="icon" />
            {sectionSelected === "sobre" && (
              <h6 className="slide-in-fwd-right">Sobre</h6>
            )}
          </Link>
        </div>
        <div
          className={`group-button ${sectionSelected === "cv" ? "active" : ""}`}
        >
          <Link to="/cv" onClick={() => setSectionSelected("cv")}>
            <AiOutlineFileText className="icon" />
            {sectionSelected === "cv" && (
              <h6 className="slide-in-fwd-right">CV</h6>
            )}
          </Link>
        </div>
        <div
          className={`group-button ${
            sectionSelected === "projetos" ? "active" : ""
          }`}
        >
          <Link to="/projetos" onClick={() => setSectionSelected("projetos")}>
            <MdWork className="icon" />
            {sectionSelected === "projetos" && (
              <h6 className="slide-in-fwd-right">Projetos</h6>
            )}
          </Link>
        </div>
        <div
          className={`group-button ${
            sectionSelected === "contato" ? "active" : ""
          }`}
        >
          <Link to="/contato" onClick={() => setSectionSelected("contato")}>
            <MdContacts className="icon" />
            {sectionSelected === "contato" && (
              <h6 className="slide-in-fwd-right">Contatos</h6>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
