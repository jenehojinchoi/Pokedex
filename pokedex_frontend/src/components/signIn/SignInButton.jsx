import React from 'react'
import styled from 'styled-components';

const Styled = {
    Button: styled.button`
        width: 100%;
        height: 3.5rem;
        padding: 1rem;
        background-color: ${({ theme }) => theme.color.primary};
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.color.white};
        font: ${({ theme }) => theme.color.display1};
    `,
};

function SignInButton() {
    return (
        <Styled.Button>
            Sign In to Continue
        </Styled.Button>
    )
}

export default SignInButton
