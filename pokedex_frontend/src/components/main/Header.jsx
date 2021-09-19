import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../index';

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
};


function Header({ pokemonList }) {
    return (
        <Styled.Header>
            <Styled.Title>Pokedex</Styled.Title>
            <SearchBar pokemonList={pokemonList} />
        </Styled.Header>
    )
}

export default Header
