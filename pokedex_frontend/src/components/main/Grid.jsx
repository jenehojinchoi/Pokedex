import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { Card, DetailModal } from '../index';
import { getPokemonList } from '../../actions/pokemonActions'

const Styled = {
    Grid: styled.div`
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: repeat(4, 4fr);
        margin: 1.5rem auto;
        width: 50vw;
    `,
};


function Grid({ pageNum, likedPage }) {
    const [modalOpened, setModalOpened] = useState(false);
    const [detailPokemonId, setDetailPokemonId] = useState(1);
    const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);

    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.pokemonList)
    const { loading, error, pokemons } = pokemonList

    const handleModalClick = () => {
        setModalOpened(!modalOpened);
    }

    // initial call
    useEffect(() => {
        dispatch(getPokemonList())
        console.log(pokemons)
        setPokemonsToDisplay(pokemons.slice((pageNum-1)*16, pageNum*16))
    }, [dispatch]);

    return (
        <>
            <Styled.Grid>
            {pokemonsToDisplay?.map((pokemon, idx) => (
                <Card 
                    key={idx} 
                    pokemon={pokemon} 
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
