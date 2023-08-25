import styled from "styled-components";

interface IGridContainerProps {}

interface ISideNavBarContainerProps {}

interface IContentContainerProps {}

export const GridContainer = styled.div<IGridContainerProps>`
    display: grid;
    grid-template-columns: 16% 84%;
    grid-template-rows: 100%;
    width: 100dvw;
    height: 100dvh;
`;

export const SideNavBarContainer = styled.div<ISideNavBarContainerProps>`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    margin-left: -5px;
    background-color: ${props => props.theme.primary2};
`;

export const ContentContainer = styled.div<IContentContainerProps>`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    background-color: ${props => props.theme.bg};
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
