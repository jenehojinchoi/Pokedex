import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { SearchBar } from '../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Styled = {
    Header : styled.div`
        position: fixed;
        top: 0;
        z-index: 14;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 3rem 0;
        width: 100%;
        height: 10vh;
        background-color: ${({ theme }) => theme.color.white};
        @media screen and (max-width: 500px) {
            width: 100%;
        }
    `,

    Title: styled.div`
        width: 33.33vw; 
        color: ${({ theme }) => theme.color.skyblue};
        @media screen and (max-width: 1920px) {
            padding-left: 3rem;
            font: ${({ theme }) => theme.font.display2};
        }
        @media screen and (max-width: 500px) {
            padding-left: 1rem;
            margin-top: 1rem;
            font: ${({ theme }) => theme.font.showLoading};
        }
    `,

    Profile: styled.div`
        display: flex;
        flex-direction: column;
    `,

    ProfileIcon: styled.div`
        position: fixed;
        right: 4rem;
        margin-top: 0.5rem;
    `,


    ModalWindow: styled.div`
        position: fixed;
        top: 7rem;
        right: 5rem;
        margin-top: 1rem;
        padding: 1rem;
        width: 26rem;
        height: 13rem;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.color.lightgrey};
    `,

    UserEmail: styled.div`
        width: 100%;
        margin: 2rem 1rem;
        color: ${({ theme }) => theme.color.black};
        font: ${({ theme }) => theme.font.modalMenu};
    `,

    Button: styled.div`
        width: 100%;
        margin: 2rem 1rem;
        text-align: left;
        color: ${({ theme }) => theme.color.primary};
        font: ${({ theme }) => theme.font.modalMenu};
    `,
};

function Header({ setSearchTerm, likedPage }) {
    const [ profileClicked, setProfileClicked ] = useState(false);
    const history = useHistory();

    const handleClick = e => {
        setProfileClicked(!profileClicked);
    }

    const handleSignOutClick = e => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        alert('Successfully signed out. Redirecting to sign in page...');
        history.push('/');
    }

    const handleRedirect= e => {
        likedPage 
        ? history.push('/main')
        : history.push('/like')
    }

    const modalWindow = 
        profileClicked 
        ? (
            <Styled.ModalWindow>
                <Styled.UserEmail>{localStorage.getItem('user')}</Styled.UserEmail>
                <Styled.Button onClick={handleSignOutClick}>Sign Out</Styled.Button>
                {
                    likedPage 
                    ? <Styled.Button onClick={handleRedirect}>View More Pokemons</Styled.Button>
                    : <Styled.Button onClick={handleRedirect}>View Liked Pokemons</Styled.Button>
                }
            </Styled.ModalWindow>
        ) : (
            <></>
        )

    return (
        <Styled.Header>
            <Styled.Title>Pokedex</Styled.Title>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Styled.Profile onClick={handleClick}>
                <Styled.ProfileIcon>
                    <FontAwesomeIcon 
                        icon={faUser} 
                        size="3x"
                        style={{color: "skyblue"}}
                    />
                </Styled.ProfileIcon>
                {modalWindow}
            </Styled.Profile>
        </Styled.Header>
    )
}

export default Header
