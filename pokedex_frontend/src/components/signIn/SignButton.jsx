import React from 'react'
import styled from 'styled-components';
import { signIn, signUp } from '../../lib/api';

const Styled = {
    Button: styled.button`
        width: 100%;
        height: 3.5rem;
        margin-top: 0.5rem;
        padding: 1rem;
        background-color: ${({ theme }) => theme.color.primary};
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.color.white};
        font: ${({ theme }) => theme.color.display1};
    `,
};

function SignButton({ history, email, password }) {
    const pathname = history.location.pathname.split('/')[2];

    const setAccessTokenAndRedirect = (data) => {
        if (data) {
            localStorage.setItem('access_token', data.TOKEN);
            localStorage.setItem('user', email);
            history.push('/main');
        } else {
            alert('Sign in failed. Please check your email and password.');
        }
    }
    const handleSignInClick = async(e) => {
        const response = await signIn(email, password);
        setAccessTokenAndRedirect(response.data);
    };

    const handleSignUpClick = async(e) => {
        const response = await signUp(email, password);
        if (response) {
            alert('Successfully created an account. Redirecting to sign in page...');
            history.push('/users/signin');
        }
    }

    return (
        (pathname === 'signin') 
        ? (
            <Styled.Button type="click" onClick={handleSignInClick}>
                Sign In to Continue
            </Styled.Button>
        ) : (
            <Styled.Button type="click" onClick={handleSignUpClick}>
                Create an account
            </Styled.Button>
        )
    )
}

export default SignButton;
