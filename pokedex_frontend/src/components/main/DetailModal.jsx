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
        right: 40rem;
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.color.white};
        font: ${({ theme }) => theme.font.cardTitle};
    `,

    Wrapper: styled.div`
        z-index: 16;
        position: fixed;
        display: flex;
        flex-direction: row;
        top: 20rem;
        left: 25%;
        width: 100rem;
        height: 50rem;
        z-index: 16;
        background-color: ${({ theme }) => theme.color.white};
        border-radius: 3rem;
        
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
            <Styled.ModalWindow>
            </Styled.ModalWindow>
            <Styled.CloseButton onClick={handleModalClick}>X</Styled.CloseButton>
            <Styled.Wrapper>
                <Styled.ImageWrapper>
                    <img className="pokemonImage" src={pokemonDetailData.image} alt="pokemon" />
                </Styled.ImageWrapper>
                <Styled.DetailWrapper>
                    <Styled.Detail>name: {pokemonDetailData.name}</Styled.Detail>
                    {
                        pokemonDetailData.abilities 
                        ? (
                            <Styled.Detail key='1'>abilities: {
                                pokemonDetailData.abilities.map((ability, idx) => {
                                    return (
                                        (idx+1 === pokemonDetailData.abilities.length)
                                        ? <span>{ability.ability.name} </span>
                                        : <span>{ability.ability.name}, </span>
                                    )
                                })
                            } 
                            </Styled.Detail>
                        ) : (<></>)
                    }
                    {
                        pokemonDetailData.types 
                        ? (
                            <Styled.Detail key='2'>types: {
                                pokemonDetailData.types.map((type, idx) => {
                                    return (
                                        (idx+1 === pokemonDetailData.types.length)
                                        ? <span>{type.type.name} </span>
                                        : <span>{type.type.name}, </span>
                                    )
                                })
                            } 
                            </Styled.Detail>
                        ) : (<></>)
                    }
                    {
                        pokemonDetailData.moves 
                        ? (
                            <Styled.Detail key='3'>moves: {
                                pokemonDetailData.moves.slice(0,7).map((move, idx) => {
                                    return (
                                        (idx+1 === 7)
                                        ? <span>{move.move.name}, etc </span>
                                        : <span>{move.move.name}, </span>
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
