import styled from "styled-components";

interface ISideNavBarHeaderContainerProps {}

export const SideNavBarHeaderContainer = styled.div<ISideNavBarHeaderContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 140px;
    background-color: #D60A0B;
`;

export const SideNavBarHeaderLogo = styled.img`
    margin-left: 20px;
    width: 55px;
    height: 55px;
    /* background-color: ${props => props.theme.bg}; */

    &:hover {
        cursor: pointer;
    }
`;

export const SideNavBarHeaderIcon = styled.img`
    width: 45px;
    height: 45px;
    margin-left: 150px;
    /* background-color: ${props => props.theme.bg}; */
`;
