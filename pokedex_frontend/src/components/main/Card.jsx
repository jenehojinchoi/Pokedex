import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'
import { like, getLikedPokemonList } from '../../actions/pokemonActions'


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

function Card({ pokemon, setModalOpened, setPokemonApiId }) {
    const [hovered, setHovered] = useState(false);
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch()

    const likedPokemonList = useSelector(state => state.likedPokemonList)
    const { likedPokemons } = likedPokemonList

    const handleOnMouseEnter = () => {
        setHovered(true);
    };

    const handleOnMouseLeave = () => {
        setHovered(false);
    };

    const handleClick = async () => {
        await dispatch(like(pokemon))
        setLiked(!liked)
        await dispatch(getLikedPokemonList)
    }

    const handleCardClick = () => {
        setPokemonApiId(pokemon.id)
        setModalOpened(true);
    }

    useEffect(() => {
        (async() => {
            try {
                if (localStorage.getItem('access_token')) {
                    await dispatch(getLikedPokemonList)
                    const likedPokemonIdList = likedPokemons.map(({ id }) => id)
                    likedPokemonIdList.includes(pokemon.id) ? setLiked(true) : setLiked(false)
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, [pokemon, likedPokemonList, liked])

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