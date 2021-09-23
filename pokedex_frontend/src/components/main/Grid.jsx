import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, DetailModal } from '../index';

const Styled = {
    Grid: styled.div`
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: repeat(4, 4fr);
        margin: 1.5rem auto;
        width: 50vw;
    `,
};


function Grid({ pageNum, pokemonList, likedPage, setPokemonList, setFullPokemonList }) {
    const [modalOpened, setModalOpened] = useState(false);
    const [detailPokemonId, setDetailPokemonId] = useState(1);
    const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);

    const handleModalClick = () => {
        setModalOpened(!modalOpened);
    }
    
    useEffect(() => {
        if (pokemonList) { 
            const newList = pokemonList.slice((pageNum-1)*16, pageNum*16);
            setPokemonsToDisplay(newList);
        } 
    }, [pokemonList])

    return (
        <>
            <Styled.Grid>
            {pokemonsToDisplay?.map((pokemon, idx) => (
                <Card 
                    key={idx} 
                    pokemon={pokemon} 
                    likedPage={likedPage}
                    setDetailPokemonId={setDetailPokemonId}
                    setPokemonList={setPokemonList}
                    setFullPokemonList={setFullPokemonList} 
                    setModalOpened={setModalOpened}
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
