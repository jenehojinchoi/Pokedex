import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainLayer } from '../components';
import getPokemonData from '../lib/api';

const Styled = {
    MainPage : styled.div`
        width: 100vw;
        height: 100vh;
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.primary};
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

const MainPage = ({ isAuthorized }) => {
    // const [ pokemonList, setPokemonList ] = useState([]);

    // useEffect(() => {
    //     (async() => {
    //         const data = await getPokemonData();
    //         console.log('data: ', data);
    //         setPokemonList(data);
    //         console.log('pokemonList: ', pokemonList);
    //     })();
    // }, []);

    return (
        <> {
            isAuthorized 
            ? <MainLayer />
            : <Styled.MainPage> Not Authorized </Styled.MainPage>
        } </>
    );
};

export default MainPage;