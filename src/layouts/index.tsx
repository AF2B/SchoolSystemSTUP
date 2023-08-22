import React from "react";

import {
    GridContainer,
    SideNavBarContainer,
    ContentContainer
} from "./style";

interface IMainLayoutProps {
    sideNavBarHeader: React.ReactNode;
    sideNavBarButton: React.ReactNode;
    content: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({
    sideNavBarHeader,
    sideNavBarButton,
    content
}) => {
    return (
        <GridContainer>
            <SideNavBarContainer>
                {sideNavBarHeader}
                {sideNavBarButton}
            </SideNavBarContainer>
            <ContentContainer>
                {content}
            </ContentContainer>
        </GridContainer>
    );
}

export default MainLayout;
