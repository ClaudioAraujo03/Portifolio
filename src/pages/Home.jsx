import React from "react";
import "../styles/pages/Home.css";
import imgMeDark from "../assets/images/me_dark_up.png";
import imgMeLight from "../assets/images/me_light_pixar.png";
import Spline from "@splinetool/react-spline";
import JSLogo from "../util/three_js/JSLogo";
import { FaArrowRight, FaFileDownload, FaVideo } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { LuBrainCircuit } from "react-icons/lu";

const Home = ({ styleWeb }) => {
  function calculateExperienceInMonths(startDate) {
    const today = new Date();
    const start = new Date(startDate);

    const yearsDifference = today.getFullYear() - start.getFullYear();
    const monthsDifference = today.getMonth() - start.getMonth();

    return yearsDifference * 12 + monthsDifference;
  }

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
              <a href="#" class="btn2">
                <span class="spn2">
                  DOWLOAD MY CV ! <FaFileDownload />
                </span>
              </a>
            </button>
            <button>
              <a href="#" class="btn2">
                <span class="spn2">
                  See a video about me here <FaVideo />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="img-home">
        <img
          src={styleWeb == "dark-mode" ? imgMeDark : imgMeLight}
          alt="me-dark"
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
          <button class="mouse">
            <div class="scroll"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
