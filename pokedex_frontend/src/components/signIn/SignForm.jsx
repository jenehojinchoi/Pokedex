import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { EmailInput, PasswordInput, SignButton } from '../index';

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
                history.push('/main');
            } else alert('Sign in Failed!')
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

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleGoToSignUp = e => {
        history.push('/users/signup');
    }

    const handleGoToSignIn = e => {
        history.push('/users/signin');
    }

    useEffect(() => {
        console.log('Form: ', history);
      }, [email, password, history]);

    return (
        (history.location.pathname.split('/')[2] === 'signin') 
        ? (
            <>
                <Styled.InputGrid>
                    <EmailInput handleChange={handleEmail} />
                    <PasswordInput handleChange={handlePassword} />
                    <SignButton handleClick={handleSignInClick} todo={'signin'}/>
                </Styled.InputGrid>
                <Styled.GoToSignUpButton onClick={handleGoToSignUp} >
                    Don't have an account? Click here to Sign up
                </Styled.GoToSignUpButton>
            </>
        ) : (
            <>
                <Styled.InputGrid>
                    <EmailInput handleChange={handleEmail} />
                    <PasswordInput handleChange={handlePassword} />
                    <SignButton handleClick={handleSignUpClick} todo={'signup'}/>
                </Styled.InputGrid>
                <Styled.GoToSignInButton onClick={handleGoToSignIn}>
                    Already have an account? Click here to Sign in
                </Styled.GoToSignInButton>
            </>
        )
    )
}

export default SignForm;
