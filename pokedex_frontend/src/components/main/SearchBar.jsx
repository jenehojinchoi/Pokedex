import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPokemonData, getPokemonDataWithSearchTerm } from '../../lib/api';

const Styled = {
    Searchbar: styled.form`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 50rem;
        height: 4rem;
    `,
    Input: styled.input`
        margin-right: 1rem;
        width: 44rem;
        height: 4rem;
        background-color: ${({ theme }) => theme.color.background};
        border-radius: 0.5rem;
        padding: 1rem;
    `,

    Button: styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6rem;
        height: 4rem;
        background-color: ${({ theme }) => theme.color.primary};
        border-radius: 0.5rem;
        font: ${({ theme }) => theme.font.searchButton};
        color: ${({ theme }) => theme.color.white};
    `,
}

function SearchBar({changePokemonList}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        console.log('searchTerm: ', searchTerm);
        (async() => {
            if (searchTerm !== '' && searchTerm) {
                const pokemonList = await getPokemonDataWithSearchTerm(searchTerm);
                changePokemonList(pokemonList);
            } else {
                const pokemonList = await getPokemonData();
                changePokemonList(pokemonList);
            }
        })();
        
    }, [searchTerm]);

    return (
        <Styled.Searchbar>
            <Styled.Input 
                type='search' 
                id='query' 
                name='q' 
                placeholder='Search...'
                onChange={handleChange}
            >
            </Styled.Input>
            <Styled.Button>Search</Styled.Button>
        </Styled.Searchbar>
    )
}

export default SearchBar
