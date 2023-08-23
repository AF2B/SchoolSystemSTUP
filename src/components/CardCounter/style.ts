import styled from "styled-components";

export const CardCounterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 270px;
    height: 120px;
    border-radius: 5px;
    background-color: ${props => props.theme.bg2};
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

export const CardCounterIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bg4};
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 30px;
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
`;

export const CardCounterValueContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    align-items: end;
    flex-direction: row;
`;
