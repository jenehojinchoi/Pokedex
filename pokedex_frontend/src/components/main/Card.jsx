import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Styled = {
    Card: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        opacity: 0.5;
    `,

    Img: styled.img`
        width: auto;
        height: 12rem;
        border-radius: 1rem;
        margin-bottom: 1rem;
    `,

    Like: styled.i`
        position: absolute;
        z-index: 11;
    `
};

function Card({ pokemon }) {
    const [hovered, setHovered] = useState(false);
    const [liked, setLiked] = useState(false);

    const handleOnMouseEnter = () => {
        setHovered(true);
    };

    const handleOnMouseLeave = () => {
        setHovered(false);
    };

    const handleClick = () => {
        console.log('Liked!');
        setLiked(!liked);
    }

    return (
        <>
            <Styled.Card
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                {hovered && <Styled.HoveredCard></Styled.HoveredCard>}
                <Styled.Img 
                    alt={pokemon.name} 
                    src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
                {pokemon.name}
                {hovered && 
                    <Styled.Like>
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            size="3x"
                            onClick={handleClick}
                            style={liked ? {} : {color: "white"}}
                        >
                        </FontAwesomeIcon>
                    </Styled.Like>
                }
            </Styled.Card>
        </>
    )
}

export default Card;