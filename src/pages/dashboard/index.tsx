import React from "react";

import AccountIcon from "../../assets/icons/account.svg";
import DashboardIcon from "../../assets/icons/av_timer.svg";
import EarningsIcon from "../../assets/icons/contentHeader/earnings.svg";
import ParentsIcon from "../../assets/icons/contentHeader/parents.svg";
import StudentsIcon from "../../assets/icons/contentHeader/students.svg";
import TeachersIcon from "../../assets/icons/contentHeader/teachers.svg";
import Group from "../../assets/icons/group.svg";
import Logo from "../../assets/icons/logo.svg";
import SubjectIcon from "../../assets/icons/openbook.svg";
import ParentIcon from "../../assets/icons/parentssidenav.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import StudentIcon from "../../assets/icons/students2.svg";
import TeacherIcon from "../../assets/icons/teachersidenav.svg";
import CardCounter from '../../components/CardCounter';
import { CardCounterMainContainer } from "../../components/CardCounter/style";
import CardCounterHeader from "../../components/CardCounterHeader";
import SearchBar from "../../components/SearchBar";
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
            icon: StudentIcon,
            text: "Students"
        },
        {
            icon: ParentIcon,
            text: "Parents"
        },
        {
            icon: TeacherIcon,
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

    const cardCounters = [
        {
            icon: StudentsIcon,
            text: "Students",
            value: 100
        },
        {
            icon: TeachersIcon,
            text: "Teachers",
            value: 1289
        },
        {
            icon: ParentsIcon,
            text: "Parents",
            value: 250
        },
        {
            icon: EarningsIcon,
            text: "Earnings",
            value: 200.000
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
                <SearchBar />
                <CardCounterHeader title={"Admin Dashboard"}/>
                <CardCounterMainContainer>
                    <CardCounter
                        icon={StudentsIcon}
                        text="Students"
                        value={2.000}
                        bgColor="#D1F3E0"/>
                    <CardCounter
                        icon={TeachersIcon}
                        text="Teachers"
                        value={150}
                        bgColor="#E1F1FF"/>
                    <CardCounter
                        icon={ParentsIcon}
                        text="Parents"
                        value={100}
                        bgColor="#FFF2D8"/>
                    <CardCounter
                        icon={EarningsIcon}
                        text="Earnings"
                        value={200.000}
                        bgColor="#FFEAEA"/>
                </CardCounterMainContainer>
                </div>
                // cardCounters.map((cardCounter, index) => (
                //     <CardCounter
                //         key={index}
                //         icon={cardCounter.icon}
                //         text={cardCounter.text}
                //         value={cardCounter.value}
                //     />
                // )) TODO: Create a way to render that way
            }
        />
    );
}

export default Dashboard;
