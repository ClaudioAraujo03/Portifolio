import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import "../styles/components/Sidebar.css";
import { LanguageModal } from "./modal/LanguageModal";
import { useTranslation } from "react-i18next";

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
  const [navigateVisibility, setNavigateVisibility] = useState<boolean>(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false);

  const { t } = useTranslation();

  const handleLanguageModalOpen = () => {
    setIsLanguageModalOpen(true);
  };

  const handleLanguageModalClose = () => {
    setIsLanguageModalOpen(false);
  };

  const handleLanguageChange = (language: string) => {
    console.log("Selected language:", language);
    setIsLanguageModalOpen(false);
  };

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
          <button className="slide-in-blurred-top" onClick={handleLanguageModalOpen}>
            {t(`sidebar.language`)}
          </button>
          <button className="slide-in-blurred-top">{t(`sidebar.social`)}
          </button>
        </div>
      </CSSTransition>
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={handleLanguageModalClose}
      />
    </div>
  );
};

export default Sidebar;
