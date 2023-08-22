import React from "react";

import TeacherIcon from "../../assets/icons/teachers.svg";

import { ElipseContainer } from "./style";

const Elipse: React.FC = () => {
    return (
        <ElipseContainer>
            <img src={TeacherIcon} alt="Teacher Icon" />
        </ElipseContainer>
    );
}

export default Elipse;
