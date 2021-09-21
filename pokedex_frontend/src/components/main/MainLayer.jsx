import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Header } from '../index';
import { getPokemonData, getPokemonDataWithSearchTerm } from '../../lib/api';

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
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNum, setPageNum] = useState(1);
    
    const changeSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
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
          setIsLoading(false);
          setPageNum(0);
        }, 2000);
    }

    useEffect(() => {
        if (!isLoading) return;
        fetchMoreListItems();
        console.log('pageNum: ', pageNum);
    }, [isLoading, pageNum]);

    useEffect(() => {
        console.log('pageNum: ', pageNum);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        (async() => {
            if (searchTerm !== '' && searchTerm) {
                const pokemonList = await getPokemonDataWithSearchTerm(searchTerm, pageNum);
                setPokemonList(pokemonList);
            } else {
                setPageNum(1);
                const pokemonList = await getPokemonData(pageNum);
                setPokemonList(pokemonList);
            }
        })();
        
    }, [searchTerm, pageNum]);

    return (
        <Styled.MainPage> 
            <Header setSearchTerm={changeSearchTerm} pageNum={pageNum}/>
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
