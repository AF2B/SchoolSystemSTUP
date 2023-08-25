import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px 0 40px;
    margin-left: -20px;
    margin-top: -20px;
    margin-bottom: 30px;
    height: 15dvh;
    width: 84dvw;
    background-color: ${props => props.theme.bg2};
    border: 1px solid black;
`;

export const SearchBarInputContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: 25dvw;
`;

export const SearchBarInput = styled.input`
    width: 40vw;
    height: 5.5vh;
    margin-left: 10px;
    padding-left: 10px;
    border: none;

    &:focus {
        outline: none;
    }
`;

export const SearchBarIconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 8dvw;
    height: 5dvh;
    margin-left: -5.5vh;
`;

interface ISearchBarIconProps {
    src: string;
}

export const SearchBarIcon = styled.img<ISearchBarIconProps>`
    &:hover {
        cursor: pointer;
    }
`;

interface ISearchBarProfileProps {
    src: string;
}

export const SearchBarProfile = styled.img<ISearchBarProfileProps>`
    &:hover {
        cursor: pointer;
    }
`;

export const CardCounterPipe = styled.span`
    display: inline-block;
    width: 1px;
    height: 40px;
    background-color: ${props => props.theme.bg3};
    content: "";
`;
