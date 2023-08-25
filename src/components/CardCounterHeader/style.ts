import styled from "styled-components";

export const CardCounterHeaderContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 100dvw;
    height: 15dvh;
    margin-left: 50px;

    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 10px;
        align-items: center;
    }
`;

export const CardCounterHeaderTitle = styled.h4`
    color: ${props => props.theme.textInvert3};
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const CardCounterHeaderLine = styled.span`
    display: inline-block;
    margin-left: 20px;
    width: 3px;
    height: 40px;
    background-color: ${props => props.theme.bg3};
    content: "";
    transform: rotate(90deg);

    @media screen and (max-width: 768px) {
        margin: 10px 0;
        transform: none;
        width: 40px;
        height: 3px;
    }
`;

export const CardCounterHeaderMinimalTitle = styled.span`
    color: ${props => props.theme.text3};
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;
