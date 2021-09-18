import React, {useEffect } from 'react';
import styled from 'styled-components';
import { SignInForm } from '../components';

const Styled = {
    SignInPage : styled.div`
        display: grid;
        grid-gap: 0;
        grid-template-columns: repeat(2, 1fr);
        width: 100vw;
        height: 100vh;
    `,

    ImageContainer: styled.div`
        width: 50%;
        height: 100%;
    `,

    Image: styled.img`
        height: 100%;
    `,

    InputContainer: styled.div`
        display: grid;
        position: relative;
        top: 30%;
        left: 25%;
        width: 35rem;
        height: 17rem;
        grid-gap: 2.5rem;
        grid-template-rows: repeat(3, 1fr);
    `,

    Title: styled.h1`
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.primary};
        margin-bottom: 1rem;
    `,

    InputGrid: styled.div`
        display: grid;
        grid-gap: 0.5rem;
        grid-template-rows: repeat(2, 1fr);
    `,
};


const SignInPage = (props) => {

    useEffect(() => {
        console.log('Page: ', props.history);
      }, [props]);


    return (
        <Styled.SignInPage>
            <Styled.ImageContainer>
                <Styled.Image src="https://cdn2.bulbagarden.net/upload/a/a7/PSMD_poster.png" alt="pokemons" />
            </Styled.ImageContainer>
            <Styled.InputContainer>
                <Styled.Title>Welcome To Pokedex</Styled.Title>
                <SignInForm history={props.history} />
            </Styled.InputContainer>
        </Styled.SignInPage>
    );
};

export default SignInPage;
