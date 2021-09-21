import React from 'react'
import styled from 'styled-components';

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

    const handleSignInClick = e => {
        fetch('http://127.0.0.1:8000/user/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(result => {
            if (result.TOKEN) {
                localStorage.setItem('access_token', result.TOKEN);
                localStorage.setItem('user', email)
                history.push('/main');
            } else alert('Sign in failed. Please check your email and password.')
        })
    };

    const handleSignUpClick = e => {
        fetch('http://127.0.0.1:8000/user/signup', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(result => {
            if (result.message === "SUCCESS") {
                alert('Successfully created an account! Redirecting to sign in page...');
                history.push('/users/signin');
            } else alert('Sign up Failed!');
        })
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
