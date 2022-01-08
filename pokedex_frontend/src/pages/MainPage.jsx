import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { MainLayer } from '../components';

const Styled = {
    MainPage : styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.primary};
    `,
    Text : styled.div`
        padding-top: 30rem;
        text-align: center;
        @media screen and (max-width: 500px) {
            padding-top: 50rem;
        }
    `,
    Img: styled.img`
        width: auto;
        height: 30rem;
        border-radius: 1rem;
        margin-bottom: 1rem;
    `,
    Grid: styled.div`
        display: grid;
        grid-gap: 0;
        grid-template-columns: repeat(4, 4fr);
        width: 100vw;
        height: 100vh;
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.primary};
    `,
};

const MainPage = ({ likedPage }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [random, setRandom] = useState(1);

    useEffect(() => {
        localStorage.getItem('access_token') && setIsAuthorized(true);
        setRandom(Math.floor(Math.random()*600));
    }, [isAuthorized]);

    return (
        <> 
        {
            isAuthorized 
            ? <MainLayer likedPage={likedPage}/>
            : (
            <Styled.MainPage>
                <Styled.Text>You are not Authorized</Styled.Text>
                <Styled.Img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random}.png`}
                    onerror={`https://img.pokemondb.net/artwork/large/pikachu.jpg`} 
                />
                <div style={{color: "black", fontSize: "2.5rem"}}>Guess the name of this cute pokemon...</div>
            </Styled.MainPage>
            )
        } 
        </>
    );
};

export default MainPage;