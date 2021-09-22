import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '../index';

const Styled = {
    Grid: styled.div`
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: repeat(4, 4fr);
        margin: 1.5rem auto;
        width: 50vw;
    `,
};


function Grid({ pageNum, pokemonList }) {
    const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);
    
    useEffect(() => {
        if (pokemonList) { 
            const newList = pokemonList.slice((pageNum-1)*16, pageNum*16);
            setPokemonsToDisplay(newList);
            newList && console.log(newList);
        } 
    }, [pokemonList])

    return (
        <Styled.Grid>
        {pokemonsToDisplay?.map((pokemon, idx) => (
            <Card key={idx} pokemon={pokemon} />
        ))}
        </Styled.Grid>
    )
}

export default Grid
