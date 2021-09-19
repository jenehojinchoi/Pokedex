import React from 'react';
import styled from 'styled-components';

const Styled = {
    Card: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 17rem;
        height: 23rem;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.color.background};
        font: ${({ theme }) => theme.font.cardTitle};
    `,

    Img: styled.img`
        width: auto;
        height: 12rem;
        border-radius: 1rem;
        margin-bottom: 1rem;
    `,

    Like: styled.div`
        width: 1rem;
    `
};

function Card({ pokemon }) {
    return (
        <Styled.Card>
            <Styled.Img 
                alt={pokemon.name} 
                src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
            {pokemon.name}
            <Styled.Like>
            </Styled.Like>
        </Styled.Card>
    )
}

export default Card;
