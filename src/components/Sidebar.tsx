import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import "../styles/components/Sidebar.css";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [navigateVisibility, setNavigateVisibility] = useState<boolean>(false);

  return (
    <div className="line-button">
      <button
        className="expand-button"
        onClick={() => setNavigateVisibility(!navigateVisibility)}
      >
        {navigateVisibility ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
      <CSSTransition
        in={navigateVisibility}
        timeout={300}
        classNames="navigate"
        unmountOnExit
      >
        <div className="navigate">
          <button className="slide-in-blurred-top">LANGUAGE</button>
          <button className="slide-in-blurred-top">SOCIAL</button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Sidebar;
