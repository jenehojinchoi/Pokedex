import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPokemonDetail } from '../../lib/api';

const Styled = {
    ModalWindow: styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        z-index: 15;
        background-color: ${({ theme }) => theme.color.black};
        opacity: 0.5;
    `,

    CloseButton: styled.div`
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 16;
        top: 15rem;
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.color.white};
        font: ${({ theme }) => theme.font.cardTitle};
        @media screen and (max-width: 1920px) {
            right: 40rem;
        }
        @media screen and (max-width: 1440px) {
            right: 20rem;
        }
        @media screen and (max-width: 500px) {
            right: 5rem;
        }
    `,

    Wrapper: styled.div`
        z-index: 16;
        position: fixed;
        display: flex;
        flex-direction: row;
        top: 20rem;
        width: 100rem;
        height: 50rem;
        z-index: 16;
        background-color: ${({ theme }) => theme.color.white};
        border-radius: 3rem;
        @media screen and (max-width: 1920px) {
            left: 25%;
        }
        @media screen and (max-width: 500px) {
            left: 12.5%;
            width: 75%;
        }
        
    `,

    ImageWrapper: styled.div`
        display: flex;
        justify-content: center;
        width: 50rem;
        height: 50rem;

        img {
            background-color: ${({ theme }) => theme.color.lightgrey};
            margin: auto;
            width: 35rem;
            height: 35rem;
            border-radius: 2rem;

            @media screen and (max-width: 500px) {
                width: 20rem;
                height: auto;
            }
        }
    `,

    DetailWrapper: styled.div`
        width: 50rem;
        height: 50rem;
        font-size: 2.3rem;
        padding: 10rem 5rem 10rem 0rem;
        color: ${({ theme }) => theme.color.black};
        font: ${({ theme }) => theme.font.modalWindow};
        line-height: 3rem;

        @media screen and (max-width: 500px) {
            padding: 5rem 5rem 5rem 0rem;
        }
    `,

    Detail: styled.div`
        margin: 1rem 0rem;
    `,
}
function DetailModal({pokemonApiId, handleModalClick}) {
    const [pokemonDetailData, setPokemonDetailData] = useState([]);

    useEffect(() => {
        (async() => {
            const pokemonData = await getPokemonDetail(pokemonApiId);
            setPokemonDetailData(pokemonData);
        })();
    }, [])

    return (
        pokemonDetailData 
        ? (<>
            <Styled.ModalWindow />
            <Styled.CloseButton onClick={handleModalClick}>X</Styled.CloseButton>
            <Styled.Wrapper>
                <Styled.ImageWrapper>
                    <img className="pokemonImage" src={pokemonDetailData.image} alt="pokemon" />
                </Styled.ImageWrapper>
                <Styled.DetailWrapper>
                    <Styled.Detail key={1}>name: {pokemonDetailData.name}</Styled.Detail>
                    {
                        pokemonDetailData.abilities 
                        ? (
                            <Styled.Detail key={2}>abilities: {
                                pokemonDetailData.abilities.map((ability, idx) => {
                                    return (
                                        (idx+1 === pokemonDetailData.abilities.length)
                                        ? <span key={idx}>{ability.ability.name} </span>
                                        : <span key={idx}>{ability.ability.name}, </span>
                                    )
                                })
                            } 
                            </Styled.Detail>
                        ) : (<></>)
                    }
                    {
                        pokemonDetailData.types 
                        ? (
                            <Styled.Detail key={3}>types: {
                                pokemonDetailData.types.map((type, idx) => {
                                    return (
                                        (idx+1 === pokemonDetailData.types.length)
                                        ? <span key={idx}>{type.type.name} </span>
                                        : <span key={idx}>{type.type.name}, </span>
                                    )
                                })
                            } 
                            </Styled.Detail>
                        ) : (<></>)
                    }
                    {
                        pokemonDetailData.moves 
                        ? (
                            <Styled.Detail key={4}>moves: {
                                pokemonDetailData.moves.slice(0,7).map((move, idx) => {
                                    return (
                                        (idx+1 === 7)
                                        ? <span key={idx}>{move.move.name}, etc </span>
                                        : <span key={idx}>{move.move.name}, </span>
                                    )
                                })
                            } 
                            </Styled.Detail>
                        ) : (<></>)
                    }
                </Styled.DetailWrapper>
            </Styled.Wrapper>
        </>
        ) : (
            <>
                <Styled.ModalWindow>
                </Styled.ModalWindow>
                <Styled.Wrapper>
                    Loading ... 
                </Styled.Wrapper>
            </>
        )
    )
}

export default DetailModal
