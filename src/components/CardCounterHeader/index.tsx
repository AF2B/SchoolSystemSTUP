import React from "react";

import { CardCounterHeaderContainer, CardCounterHeaderLine, CardCounterHeaderMinimalTitle, CardCounterHeaderTitle } from "./style";

interface ICardCounterHeaderProps {
    title: string;
}

const CardCounterHeader: React.FC<ICardCounterHeaderProps> = ({
    title
}) => {
    return (
        <CardCounterHeaderContainer>
            <CardCounterHeaderTitle>{title}</CardCounterHeaderTitle>
            <CardCounterHeaderLine />
            <CardCounterHeaderMinimalTitle>Home</CardCounterHeaderMinimalTitle>
        </CardCounterHeaderContainer>
    )
}

export default CardCounterHeader;
