import React from 'react';
import styled from 'styled-components';
import { SignForm } from '../components';

const Styled = {
    SignPage : styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center; 
        width: 100vw;
        height: 100vh;
    `,

    Div: styled.div`
        width: 40%;
        height: 100%;
        background-color: ${({ theme }) => theme.color.red};
        @media screen and (max-width: 500px) {
            display: none;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,

    InputContainer: styled.div`
        width: 60%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,


    Img: styled.img`
        width: 25rem;
        height: auto;
        margin: 15rem 0rem;
    `,

    Input: styled.div`
        display: grid;
        margin: 0 auto;
        width: 35rem;
        height: 17rem;
        grid-gap: 2.5rem;
        grid-template-rows: repeat(3, 1fr);
    `,

    Title: styled.h1`
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.black};
        margin-bottom: 1rem;
        line-height: 5rem;
    `,

    InputGrid: styled.div`
        display: grid;
        grid-gap: 0.5rem;
        grid-template-rows: repeat(2, 1fr);
    `,
};


const SignPage = (props) => {
    return (
        <Styled.SignPage>
            <Styled.Div />
            <Styled.InputContainer>
                <Styled.Input>
                    <Styled.Title>Welcome To Pokedex</Styled.Title>
                    <SignForm history={props.history} />
                </Styled.Input>
            </Styled.InputContainer>
        </Styled.SignPage>
    );
};

export default SignPage;
