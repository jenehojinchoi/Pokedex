import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, SignButton } from '../index';

const Styled = {
    InputGrid: styled.div`
        display: grid;
        grid-gap: 0.5rem;
        grid-template-rows: repeat(3, 1fr);
    `,
    GoToSignUpButton: styled.button`
        text-align: center;
        font: ${({ theme }) => theme.font.cardTitle};
    `,

    GoToSignInButton: styled.button`
        text-align: center;
        font: ${({ theme }) => theme.font.cardTitle};
    `,
};

function SignForm({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const pathname = history.location.pathname.split('/')[1];

    const handleChange = e => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        } else {}
    }

    const handleClick = e => {
        if (pathname === '') {
            history.push('/signup');
        } else if (pathname === 'signup') {
            history.push('');
        }
    }

    const buttonText = (
        pathname === '' 
        ? 'Don\'t have an account? Click here to Sign up' 
        : 'Already have an account? Click here to Sign in'
    )

    return (
        <>
            <Styled.InputGrid>
                <Input input={'email'} handleChange={handleChange} />
                <Input input={'password'} handleChange={handleChange} />
                <SignButton 
                    history={history} 
                    email={email} 
                    password={password}
                />
            </Styled.InputGrid>
            <Styled.GoToSignUpButton onClick={handleClick} >
                {buttonText}
            </Styled.GoToSignUpButton>
        </>
    )
}

export default SignForm;
