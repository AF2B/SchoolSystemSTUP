import React from "react";

interface ICardCounterProps {
    icon: string;
    bgColor: string;
    text: string;
    value: number;
};

const CardCounter: React.FC<ICardCounterProps> = ({
    icon,
    bgColor,
    text,
    value
}) => {
    return (
        <div className="card-counter" style={{ backgroundColor: bgColor }}>
            <i className={icon}></i>
            <span className="count-numbers">{value}</span>
            <span className="count-name">{text}</span>
        </div>
    );
};

export default CardCounter;
