import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { likePokemon, getLikedList } from '../../lib/api';

const Styled = {
    Card: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 1rem;
        width: 17rem;
        height: 23rem;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.color.background};
        font: ${({ theme }) => theme.font.cardTitle};

        &:hover {
            background-color: ${({ theme }) => theme.color.background2};
        }
    `,

    HoveredCard: styled.div`
        position: absolute;
        z-index: 10;
        width: 17rem;
        height: 23rem;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.color.grey};
        opacity: 0.6;
    `,

    Img: styled.img`
        width: auto;
        height: 12rem;
        border-radius: 1rem;
        margin-bottom: 1rem;
    `,

    Like: styled.i`
        z-index: 11;
        margin: auto;
    `,

    Button: styled.div`
        z-index: 13;
        margin: auto;
    `,
};

function Card({ pokemon, likedPage, likedPokemonList, setLikedPokemonList, setDetailPokemonId, setFullPokemonList, setModalOpened }) {
    const [hovered, setHovered] = useState(false);
    const [liked, setLiked] = useState(false);

    const handleOnMouseEnter = () => {
        setHovered(true);
    };

    const handleOnMouseLeave = () => {
        setHovered(false);
    };

    const handleClick = async() => {
        await likePokemon(pokemon);
        setLiked(!liked);
        if (likedPage && localStorage.getItem('access_token')) {
            const newList = await getLikedList();
            setLikedPokemonList(newList);
        } 
    }

    const handleCardClick = () => {
        setModalOpened(true);
        setDetailPokemonId(pokemon.id);
    }

    useEffect(() => {
        (async() => {
            try {
                if (localStorage.getItem('access_token')) {
                    const likedPokemonIdList = likedPokemonList.map(({ id }) => id)
                    likedPokemonIdList.includes(pokemon.id) ? setLiked(true) : setLiked(false)
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, [pokemon, likedPokemonList])

    return (
        <>
            <Styled.Card
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                {hovered && <Styled.HoveredCard></Styled.HoveredCard>}
                <Styled.Img 
                    src={pokemon.image}
                    onerror={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} 
                />
                {pokemon.name}
                { hovered && 
                    <>
                        <Styled.Button onClick={handleCardClick}>
                            View Details 
                        </Styled.Button>
                        <Styled.Like>
                            <FontAwesomeIcon 
                                icon={faHeart} 
                                size="3x"
                                onClick={handleClick}
                                style={liked ? {} : {color: "white"}}
                            >
                            </FontAwesomeIcon>
                        </Styled.Like>
                    </>
                } 
            </Styled.Card>
        </>
    )
}

export default Card