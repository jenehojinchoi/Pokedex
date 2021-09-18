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

function EmailInput({handleChange}) {
    return (
        <>
            <Styled.Input 
                placeholder="email"
                type="text"
                name="email"
                onChange={handleChange}
            />
        </>
    )
}

export default EmailInput;
