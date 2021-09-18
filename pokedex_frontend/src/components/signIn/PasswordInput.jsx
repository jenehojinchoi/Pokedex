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

function PasswordInput({handleChange}) {
    return (
        <>
            <Styled.Input 
                placeholder="password"
                type="password"
                name="pw"
                onChange={handleChange}
            />
        </>
    )
}

export default PasswordInput;
