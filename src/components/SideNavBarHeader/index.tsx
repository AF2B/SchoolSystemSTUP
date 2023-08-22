import React from "react";

import {
    SideNavBarHeaderContainer,
    SideNavBarHeaderLogo,
    SideNavBarHeaderIcon
} from "./style";

interface ISideNavBarHeaderProps {
    icon: string;
}

const SideNavBarHeader: React.FC<ISideNavBarHeaderProps> = ({ icon }) => {
    return (
        <SideNavBarHeaderContainer>
            <SideNavBarHeaderLogo src={icon}/>
            <SideNavBarHeaderIcon src={icon}/>
        </SideNavBarHeaderContainer>
    );
}

export default SideNavBarHeader;
