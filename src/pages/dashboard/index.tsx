import React from "react";

import AccountIcon from "../../assets/icons/account.svg";
import DashboardIcon from "../../assets/icons/av_timer.svg";
import Group from "../../assets/icons/group.svg";
import Logo from "../../assets/icons/logo.svg";
import SubjectIcon from "../../assets/icons/openbook.svg";
import ParentsIcon from "../../assets/icons/parentssidenav.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import StudentsIcon from "../../assets/icons/students2.svg";
import TeachersIcon from "../../assets/icons/teachersidenav.svg";
import SideNavBarButton from "../../components/SideNavBarButton";
import { SideNavBarHeaderContainer, SideNavBarHeaderIcon, SideNavBarHeaderLogo } from '../../components/SideNavBarHeader/style';
import MainLayout from "../../layouts";

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => {
    const sideNavBarButtons = [
        {
            icon: DashboardIcon,
            text: "Dashboard"
        },
        {
            icon: StudentsIcon,
            text: "Students"
        },
        {
            icon: ParentsIcon,
            text: "Parents"
        },
        {
            icon: TeachersIcon,
            text: "Teachers"
        },
        {
            icon: AccountIcon,
            text: "Account"
        },
        {
            icon: SubjectIcon,
            text: "Subject"
        },
        {
            icon: SettingsIcon,
            text: "Settings"
        }
    ]

    return (
        <MainLayout
            sideNavBarHeader={
                <SideNavBarHeaderContainer>
                    <SideNavBarHeaderLogo src={Logo} />
                    <SideNavBarHeaderIcon src={Group} />
                </SideNavBarHeaderContainer>
            }
            sideNavBarButton={
                sideNavBarButtons.map((button, index) => (
                    <SideNavBarButton
                        key={index}
                        icon={button.icon}
                        text={button.text}
                    />
                ))
            }
            content={
                <div>
                    <h1>Dashboard</h1>
                </div>
            }
        />
    );
}

export default Dashboard;
