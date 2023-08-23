import styled from "styled-components";

export const SideNavBarButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* padding: 0.5rem 0rem; */

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        padding: 0 2px;
    }
`;

export const SideNavBarButtonStyled = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    width: 100vw;
    height: 70px;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.primary2};
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const SideNavBarButtonIcon = styled.img`
    margin-right: 1rem;
    width: 30px;
    height: 30px;

    @media screen and (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`;

export const SideNavBarButtonText = styled.p`
    color: ${props => props.theme.text};
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.5px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        letter-spacing: 0.8px;
    }
`;
