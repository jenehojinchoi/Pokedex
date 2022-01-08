import React from 'react';
import styled from 'styled-components';

const Styled = {
    Input: styled.input`
        width: 100%;
        height: 3.5rem;
        padding: 1rem;
        background-color: ${({ theme }) => theme.color.background};
        border-radius: 0.5rem;
        font:  ${({ theme }) => theme.font.cardTitle};
    `,
};

function Input({input, handleChange}) {

    return (
        (input === 'email')
        ? (
            <Styled.Input 
                placeholder="email"
                type="text"
                name="email"
                onChange={handleChange}
            />
        ) : (
            <Styled.Input 
                placeholder="password"
                type="password"
                name="password"
                onChange={handleChange}
            />
        )
    )
}

export default Input;
