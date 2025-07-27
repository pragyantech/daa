import React from 'react';

const InfoBox: React.FC<{ title: string; content: string }> = ({ title, content }) => {
    return (
        <div className="info-box">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default InfoBox;