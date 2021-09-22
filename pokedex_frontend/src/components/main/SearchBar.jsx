import React from 'react';
import styled from 'styled-components';

const Styled = {
    Searchbar: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 56rem;
        height: 4rem;
    `,
    
    Input: styled.input`
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

function SearchBar({ setSearchTerm }) {
    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

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
        </Styled.Searchbar>
    )
}

export default SearchBar
