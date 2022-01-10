import React from 'react';
import styled from 'styled-components';

const Styled = {
    Searchbar: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 33.33vw;
        height: 4rem;
    `,
    
    Input: styled.input`
        width: 44rem;
        height: 4rem;
        background-color: ${({ theme }) => theme.color.background};
        border-radius: 0.5rem;
        padding: 2rem;
        font:  ${({ theme }) => theme.font.cardTitle};
        ::placeholder: {
            font: ${({ theme }) => theme.font.cardTitle};
        }
    `,
}

function SearchBar({ setSearchTerm }) {
    const handleChange = e => {
        setSearchTerm(e.target.value)
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
