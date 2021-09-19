import React from 'react';
import styled from 'styled-components';
import { Card, Header } from '../index';

const Styled = {
    MainPage : styled.div`
        padding: 2rem;
        width: 100vw;
        height: 100vh;
    `,

    Grid: styled.div`
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(4, 4fr);
        margin: auto;
        width: 50vw;
        height: 80vh;
    `,
};


function MainLayer( { pokemonList }) {
    return (
        <Styled.MainPage> 
            <Header pokemonList={pokemonList}/>
            <Styled.Grid>
            {pokemonList?.map((pokemon, idx) => (
                <Card key={idx} pokemon={pokemon} />
            ))}
            </Styled.Grid>
        </Styled.MainPage>
    )
}

export default MainLayer;
