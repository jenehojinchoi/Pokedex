import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '../index';

const Styled = {
    MainPage : styled.div`
        padding: 2rem;
        width: 100vw;
        height: 100vh;
    `,

    Title: styled.div`
        color: ${({ theme }) => theme.color.skyblue};
        font: ${({ theme }) => theme.font.display1};
    `,

    Grid: styled.div`
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(4, 4fr);
        margin: auto;
        width: 60vw;
        height: 80vh;
    `,
};


function MainLayer( { pokemonList }) {
    useEffect(() => {
        console.log(pokemonList);
    }, );
    
    return (
        <Styled.MainPage> 
            <Styled.Title>
                Pokedex 
            </Styled.Title>
            <Styled.Grid>
            {pokemonList?.map((pokemon, idx) => (
                <Card key={idx} pokemon={pokemon} />
            ))}
            </Styled.Grid>
        </Styled.MainPage>
    )
}

export default MainLayer;
