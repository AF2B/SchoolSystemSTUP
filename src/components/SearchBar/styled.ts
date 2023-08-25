import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 40px 0 40px;
    margin-top: -20px;
    margin-bottom: 30px;
    height: 16dvh;
    width: 84dvw;
    background-color: ${props => props.theme.bg2};

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100dvw;
        height: 15vh;
        margin-left: -20px;
    }
`;

export const SearchBarInputContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: 25dvw;

    @media screen and (min-width: 768px) {
        width: 25vw;
    }
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
    margin-left: -5.5dvh;
    margin-right: 320px;

    @media screen and (min-width: 768px) {
        width: 8vw;
    }
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

    @media screen and (min-width: 768px) {
        display: inline-block;
        width: 1px;
        height: 40px;
        background-color: ${props => props.theme.bg3};
        content: "";
    }
`;
