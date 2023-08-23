import React from "react";

interface ICardCounterProps {
    icon: string;
    text: string;
    value: number;
};

import {
    CardCounterContainer,
    CardCounterIcon,
    CardCounterTitle,
    CardCounterValue,
    CardCounterIconContainer,
    CardCounterPipe,
    CardCounterTitleValueContainer,
    CardCounterValueContainer
} from "./style";

const CardCounter: React.FC<ICardCounterProps> = ({
    icon,
    text,
    value
}) => {
    return (
        <CardCounterContainer >
            <CardCounterIconContainer>
                <CardCounterIcon src={icon} />
            </CardCounterIconContainer>
            <CardCounterPipe />
            <CardCounterTitleValueContainer>
                <CardCounterTitle>{text}</CardCounterTitle>
                <CardCounterValueContainer>
                    <CardCounterValue>{value}</CardCounterValue>
                </CardCounterValueContainer>
            </CardCounterTitleValueContainer>
        </CardCounterContainer>
    );
};

export default CardCounter;
