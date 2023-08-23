import styled from "styled-components";

interface ISideNavBarHeaderContainerProps {}

export const SideNavBarHeaderContainer = styled.div<ISideNavBarHeaderContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    max-width: auto;
    height: 140px;
    background-color: ${props => props.theme.bg3};

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const SideNavBarHeaderLogo = styled.img`
    margin-left: 30px;
    width: 55px;
    height: 55px;
    /* background-color: ${props => props.theme.bg}; */

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 10px;
    }
`;

export const SideNavBarHeaderIcon = styled.img`
    width: 45px;
    height: 45px;
    margin-left: 150px;
    /* background-color: ${props => props.theme.bg}; */

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 10px;
    }
`;
