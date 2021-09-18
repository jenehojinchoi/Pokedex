import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { EmailInput, PasswordInput, SignInButton } from '../index';

const Styled = {
    InputGrid: styled.div`
        display: grid;
        grid-gap: 0.5rem;
        grid-template-rows: repeat(3, 1fr);
    `,
};

function SignInForm({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = e => {
        fetch('http://127.0.0.1:8000/user/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(result => {
            result.TOKEN 
            ? localStorage.setItem('access_token', result.TOKEN)
            : alert('SIGNIN_FAILED')
        })
        .then(() => {
            localStorage.getItem('access_token') 
            ? history.replace('/main') 
            : alert('NO_TOKEN')
        })
    };
    
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    useEffect(() => {
      }, [email, password, history]);

    return (
        <div>
            <Styled.InputGrid>
                <EmailInput handleChange={handleEmail} />
                <PasswordInput handleChange={handlePassword} />
                <SignInButton handleClick={handleClick}/>
            </Styled.InputGrid>
        </div>
    )
}

export default SignInForm
