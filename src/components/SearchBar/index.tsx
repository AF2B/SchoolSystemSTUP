import React from "react";

import EmailIcon from "../../assets/icons/inputHeader/email.svg";
import Notification from "../../assets/icons/inputHeader/notifications.svg";
import SearchIcon from "../../assets/icons/inputHeader/search.svg";
import { CardCounterPipe, SearchBarContainer, SearchBarIcon, SearchBarIconContainer, SearchBarInput, SearchBarInputContainer, SearchBarProfile } from "./styled";

const SearchBar: React.FC = () => {
    return (
        <SearchBarContainer>
            <SearchBarInputContainer>
                <SearchBarIcon src={SearchIcon}/>
                <SearchBarInput type="text" placeholder="Search" />
            </SearchBarInputContainer>
            <SearchBarIconContainer>
                <SearchBarIcon src={EmailIcon}/>
                <SearchBarIcon src={Notification}/>
                <CardCounterPipe />
                <SearchBarProfile src={SearchIcon}/>
            </SearchBarIconContainer>
        </SearchBarContainer>
    );
}

export default SearchBar;
