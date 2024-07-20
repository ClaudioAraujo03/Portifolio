import React, { FC } from "react";
import "../styles/pages/Home.css";
import imgMeDark from "../assets/images/me_dark_up.png";
import imgMeLight from "../assets/images/me_light_pixar.png";
import { FaFileDownload, FaVideo } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { LuBrainCircuit } from "react-icons/lu";
import { useTheme } from "../contexts/ThemeContext";

interface HomeProps {
}

export const Home: FC<HomeProps> = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="home">
      <h1 className="section-txt">HOME</h1>

      <div className="info-home">
        <h1>01</h1>
        <div className="txt-infos">
          <span className="my-name">Hello I`am</span>
          <span className="job">FULLSTACK DEVELOPER</span>
          <span className="name">
            My name is <b>Cláudio Araújo</b>
          </span>
          <div className="btn-actions-home">
            <button>
              <a href="#" className="btn2">
                <span className="spn2">
                  DOWNLOAD MY CV ! <FaFileDownload />
                </span>
              </a>
            </button>
            <button>
              <a href="#" className="btn2">
                <span className="spn2">
                  See a video about me here <FaVideo />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="img-home">
        <img
          src={theme === "dark-mode" ? imgMeDark : imgMeLight}
          alt="me"
        />
        <div className="info-boxes">
          <div className="box slide-in-bck-right">
            <div className="e-card playing">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="infotop">
                <LuBrainCircuit />
                <br />
                <span>Hard skills</span>
                <br />
                <p>
                  This section highlights essential technical skills required
                  for the role, demonstrating expertise and proficiency.
                </p>
                <button className="animated-button btn-style-1">View skills</button>
              </div>
            </div>
          </div>
          <div className="box slide-in-bck-right">
            <div className="e-card playing">
              <div className="infotop">
                <PiCertificate />
                <br />
                <span>Certifications</span>
                <br />
                <p>
                  This section showcases key certifications, reflecting
                  commitment to professional growth and industry standards.
                </p>
                <button className="animated-button btn-style-2">See certifications</button>
              </div>
            </div>
          </div>
          <button className="mouse">
            <div className="scroll"></div>
          </button>
        </div>
      </div>
    </div>
  );
};