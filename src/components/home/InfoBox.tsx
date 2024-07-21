import React from 'react';

interface InfoBoxProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    buttonClass: string;
    children?: React.ReactNode;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ icon, title, description, buttonText, buttonClass, children }) => (
    <div className="box slide-in-bck-right">
        <div className="e-card playing">
            {children}
            <div className="infotop">
                {icon}
                <br />
                <span>{title}</span>
                <br />
                <p>{description}</p>
                <button className={`animated-button ${buttonClass}`}>{buttonText}</button>
            </div>
        </div>
    </div>
);
