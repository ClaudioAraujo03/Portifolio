import React from 'react';
import { FaFileDownload, FaVideo } from 'react-icons/fa';

interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ href, icon, text }) => (
  <button>
    <a href={href} className="btn2">
      <span className="spn2">
        {text} {icon}
      </span>
    </a>
  </button>
);
