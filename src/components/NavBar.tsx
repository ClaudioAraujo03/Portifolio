import React, { useState, FC } from "react";
import "../styles/components/NavBar.css";
import { MdHome, MdPerson, MdWork, MdContacts } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

interface NavBarProps {

}

export const NavBar: FC<NavBarProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [sectionSelected, setSectionSelected] = useState<string>("home");

  return (
    <div>
      {theme === "dark-mode" ? (
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
          className={`group-button ${sectionSelected === "home" ? "active" : ""
            }`}
        >
          <Link to="/home" onClick={() => setSectionSelected("home")}>
            <MdHome className="icon" />
            {sectionSelected === "home" && (
              <h6 className="slide-in-fwd-right">{t(`navbar.home`)}</h6>
            )}
          </Link>
        </div>
        <div
          className={`group-button ${sectionSelected === "sobre" ? "active" : ""
            }`}
        >
          <Link to="/sobre" onClick={() => setSectionSelected("sobre")}>
            <MdPerson className="icon" />
            {sectionSelected === "sobre" && (
              <h6 className="slide-in-fwd-right">{t(`navbar.about`)}</h6>
            )}
          </Link>
        </div>
        <div
          className={`group-button ${sectionSelected === "cv" ? "active" : ""}`}
        >
          <Link to="/cv" onClick={() => setSectionSelected("cv")}>
            <AiOutlineFileText className="icon" />
            {sectionSelected === "cv" && (
              <h6 className="slide-in-fwd-right">{t(`navbar.CV`)}</h6>
            )}
          </Link>
        </div>
        <div
          className={`group-button ${sectionSelected === "projetos" ? "active" : ""
            }`}
        >
          <Link to="/projetos" onClick={() => setSectionSelected("projetos")}>
            <MdWork className="icon" />
            {sectionSelected === "projetos" && (
              <h6 className="slide-in-fwd-right">{t(`navbar.projects`)}</h6>
            )}
          </Link>
        </div>
        <div
          className={`group-button ${sectionSelected === "contato" ? "active" : ""
            }`}
        >
          <Link to="/contato" onClick={() => setSectionSelected("contato")}>
            <MdContacts className="icon" />
            {sectionSelected === "contato" && (
              <h6 className="slide-in-fwd-right">{t(`navbar.contacts`)}</h6>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};