import styled from "styled-components";

export const SideNavBarButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* padding: 0.5rem 0rem; */
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
`;

export const SideNavBarButtonIcon = styled.img`
    margin-right: 1rem;
`;

export const SideNavBarButtonText = styled.p`
    color: ${props => props.theme.text};
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;