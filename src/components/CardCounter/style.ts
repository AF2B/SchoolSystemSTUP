import styled from "styled-components";

export const CardCounterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 300px;
    height: 120px;
    border-radius: 5px;
    background-color: ${props => props.theme.bg2};

    @media screen and (max-width: 768px) {
        width: 100dvw;
        height: 20dvh;
        margin-left: -700px;
        flex-direction: column;
        padding: 15px;
    }
`;

export const CardCounterTitle = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-size: 14px;
    color: ${props => props.theme.textInvert};
`;

export const CardCounterValue = styled.span`
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.8px;
    color: ${props => props.theme.textInvert3};
`;

interface ICardCounterIconContainerProps {
    color: string;
}

export const CardCounterIconContainer = styled.div<ICardCounterIconContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 30px;

    @media screen and (max-width: 768px) {
        margin: 0;
        margin-bottom: 10px;
    }
`;

export const CardCounterPipe = styled.span`
    display: inline-block;
    width: 1px;
    height: 40px;
    background-color: ${props => props.theme.bg3};
    content: "";
`;

export const CardCounterIcon = styled.img`
    width: 50px;
    height: 50px;
`;

export const CardCounterTitleValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 3rem;

    @media screen and (max-width: 768px) {
        align-items: center;
        margin-right: 0;
        text-align: center;
    }
`;

export const CardCounterValueContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    align-items: end;
    flex-direction: row;
`;

export const CardCounterMainContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 90em;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
