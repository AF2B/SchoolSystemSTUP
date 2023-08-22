import React from "react";

import {
    SideNavBarButtonContainer,
    SideNavBarButtonStyled,
    SideNavBarButtonIcon,
    SideNavBarButtonText
} from "./style";

interface ISideNavBarButtonProps {
    icon: string;
    text: string;
}

const SideNavBarButton: React.FC<ISideNavBarButtonProps> = ({ icon, text }) => {
    return (
        <SideNavBarButtonContainer>
            <SideNavBarButtonStyled>
                <SideNavBarButtonIcon src={icon} />
                <SideNavBarButtonText>{text}</SideNavBarButtonText>
            </SideNavBarButtonStyled>
        </SideNavBarButtonContainer>
    );
}

export default SideNavBarButton;
