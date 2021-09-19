import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MainLayer } from '../components';

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
    const [ pokemonList, setPokemonList ] = useState([]);

    const getPokemonData = async () => {
        try {
            const data = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
            console.log('getPokemonData');
            console.log(data);
            return data.data.results;
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        (async() => {
            const data = await getPokemonData();
            console.log('data: ', data);
            setPokemonList(data);
            console.log('pokemonList: ', pokemonList);
        })();
    }, []);

    return (
        <> {
            isAuthorized 
            ? <MainLayer pokemonList={pokemonList}/>
            : <Styled.MainPage> Not Authorized </Styled.MainPage>
        } </>
    );
};

export default MainPage;