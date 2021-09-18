import React from 'react';
import styled from 'styled-components';

const Styled = {
    Input: styled.input`
        width: 100%;
        height: 3.5rem;
        padding: 1rem;
        background-color: ${({ theme }) => theme.color.background};
        border-radius: 0.5rem;
    `,
};

const handleInput = e => {
    const { value, name } = e.target;
    console.log(value);
}

function EmailInput() {
    return (
        <>
            <Styled.Input 
                placeholder="email"
                type="text"
                name="email"
                onChange={handleInput}
            />
        </>
    )
}

export default EmailInput;
