import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { Card, DetailModal } from '../index';
import { getPokemonList, getLikedPokemonList } from '../../actions/pokemonActions'

const Styled = {
    Grid: styled.div`
        width: 50vw;
        @media screen and (max-width: 1920px) {
            display: grid;
            margin: 1.5rem auto;
            grid-gap: 3rem;
            grid-template-columns: repeat(4, 4fr);
        }
        @media screen and (max-width: 500px) {
            display: grid;
            margin-left: 13rem;
            grid-gap: 1rem;
            grid-template-columns: repeat(2, 4fr);
        }
    `,
};


function Grid({ pageNum, likedPage }) {
    const [modalOpened, setModalOpened] = useState(false);
    const [detailPokemonId, setDetailPokemonId] = useState(1);

    const dispatch = useDispatch()

    const pokemonList = useSelector(state => state.pokemonList)
    const { pokemons } = pokemonList
    const likedPokemonList = useSelector(state => state.likedPokemonList)
    const { likedPokemons } = likedPokemonList

    const handleModalClick = () => {
        setModalOpened(!modalOpened);
    }

    // initial call
    useEffect(() => {
        dispatch(getPokemonList())
        dispatch(getLikedPokemonList())
    }, [dispatch]);

    return (
        <>
            <Styled.Grid>
            {!likedPage 
            ? pokemons?.slice((pageNum-1)*16, pageNum*16).map((pokemon, idx) => (
                <Card 
                    key={idx} 
                    pokemon={pokemon} 
                    likedPage={likedPage}
                    setModalOpened={setModalOpened}
                    setPokemonApiId={setDetailPokemonId}
                />
            ))
            : likedPokemons?.slice((pageNum-1)*16, pageNum*16).map((pokemon, idx) => (
                <Card 
                    key={idx} 
                    pokemon={pokemon} 
                    likedPage={likedPage}
                    setModalOpened={setModalOpened}
                    setPokemonApiId={setDetailPokemonId}
                />
            ))}    
            </Styled.Grid>
            {modalOpened && detailPokemonId && 
                <DetailModal 
                    pokemonApiId={detailPokemonId} 
                    handleModalClick={handleModalClick}
                />
            }
        </>
    )
}

export default Grid
