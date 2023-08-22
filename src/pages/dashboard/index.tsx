import React from "react";

import MainLayout from "../../layouts";
import SideNavBarButton from "../../components/SideNavBarButton";
import DashboardIcon from "../../assets/icons/av_timer.svg";
import StudentsIcon from "../../assets/icons/students2.svg";
import ParentsIcon from "../../assets/icons/parents.svg";
import TeachersIcon from "../../assets/icons/teachers.svg";
import AccountIcon from "../../assets/icons/account.svg";
import SubjectIcon from "../../assets/icons/openbook.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import Logo from "../../assets/icons/group.svg";
import { SideNavBarHeaderLogo, SideNavBarHeaderIcon, SideNavBarHeaderContainer } from '../../components/SideNavBarHeader/style';

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
                    <SideNavBarHeaderIcon src={Logo} />
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
