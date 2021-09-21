import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Header } from '../index';

const Styled = {
    MainPage : styled.div`
        display: flex;
        flex-direction: column;
        padding: 2rem;
        width: 100vw;
    `,

    Grid: styled.div`
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: repeat(4, 4fr);
        margin: auto;
        width: 50vw;
    `,

    Loading: styled.div`
        width: 50vw;
        margin: auto;
        padding-top: 2rem;
        text-align: center;
        font: ${({ theme }) => theme.font.cardTitle};
    `,
};


function MainLayer() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNum, setPageNum] = useState(1);

    const changePokemonList = (list) => {
        setPokemonList(list)
    }

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
    
        if (scrollTop + clientHeight >= scrollHeight) {
            console.log('handle Scroll');
            console.log('scrollHeight: ', scrollHeight);
            console.log('scrollTop: ', scrollTop);
            console.log('clientHeight: ', clientHeight);
            setPageNum(pageNum + 1);
            setIsLoading(true);
        }
    }
    
    function fetchMoreListItems() {
        console.log('Fetch more list items');
        setTimeout(() => {
          //setPageNum(pageNum+1);
          setIsLoading(false);
        }, 2000);
    }

    useEffect(() => {
        if (!isLoading) return;
        fetchMoreListItems();
        console.log('pageNum: ', pageNum);
    }, [isLoading]);

    useEffect(() => {
        console.log('pageNum: ', pageNum);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <Styled.MainPage> 
            <Header changePokemonList={changePokemonList} pageNum={pageNum}/>
            <Styled.Grid>
            {pokemonList?.map((pokemon, idx) => (
                <Card key={idx} pokemon={pokemon} />
            ))}
            </Styled.Grid>
            {isLoading && 
                <Styled.Loading>
                    Loading more pokemons...
                </Styled.Loading>
            }
        </Styled.MainPage>
    )
}

export default MainLayer;
