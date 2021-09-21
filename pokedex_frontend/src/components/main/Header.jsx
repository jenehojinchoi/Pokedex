import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { SearchBar } from '../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Styled = {
    Header : styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 1vh;
        width: 100%;
        height: 10vh;
    `,

    Title: styled.div`
        margin-left: 2rem;
        color: ${({ theme }) => theme.color.skyblue};
        font: ${({ theme }) => theme.font.display2};
    `,

    Profile: styled.div`
        display: flex;
        flex-direction: column;
        width: 23rem;
    `,

    ModalWindow: styled.div`
        margin-top: 1rem;
        width: 100%;
        height: 15rem;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.color.lightgrey};
    `,

    UserEmail: styled.div`
        width: 100%;
        padding: 0.1rem 0.6rem;
        margin: 2rem 1.5rem;
        text-align: left;
        color: ${({ theme }) => theme.color.black};
        font: ${({ theme }) => theme.font.ModalMenu};
    `,

    Button: styled.button`
        width: 100%;
        margin: 1rem 1rem;
        text-align: left;
        color: ${({ theme }) => theme.color.primary};
        font: ${({ theme }) => theme.font.ModalMenu};
    `,
};

function Header({ setSearchTerm }) {
    const [ profileClicked, setProfileClicked ] = useState(false);
    const history = useHistory();

    const handleClick = e => {
        setProfileClicked(!profileClicked);
        console.log(profileClicked);
    }

    const handleSignOutClick = e => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        history.push('/users/signin');
    }

    const handleLikedList = e => {
        console.log('handle liked list');
    }

    let modalWindow = null;
    if (profileClicked) {   
        modalWindow = (
            <Styled.ModalWindow>
                <Styled.UserEmail>{localStorage.getItem('user')}</Styled.UserEmail>
                <Styled.Button onClick={handleSignOutClick}>Sign Out</Styled.Button>
                <Styled.Button onClick={handleLikedList}>View Liked Pokemons</Styled.Button>
            </Styled.ModalWindow>
        )
    } else {
        modalWindow = <></>
    }

    return (
        <Styled.Header>
            <Styled.Title>Pokedex</Styled.Title>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Styled.Profile onClick={handleClick}>
                <FontAwesomeIcon 
                    icon={faUser} 
                    size="3x"
                    style={{color: "skyblue"}}
                />
                {modalWindow}
            </Styled.Profile>
        </Styled.Header>
    )
}

export default Header
