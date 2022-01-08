import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header, Grid } from '../index';
import { getFullPokemonList, getLikedList } from '../../lib/api';


const Styled = {
    MainPage : styled.div`
        display: flex;
        flex-direction: column;
        padding: 2rem;
        width: 100vw;
    `,

    Loading: styled.div`
        width: 50vw;
        margin: auto;
        padding-top: 2rem;
        text-align: center;
        font: ${({ theme }) => theme.font.showLoading};
    `,

    GridContainer: styled.div`
        margin-top: 10rem;
        position: relative;
    `,
};

function MainLayer({ likedPage }) {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemonList, setPokemonList] = useState([]);
    const [fullPokemonList, setFullPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [prevSearchTerm, setPrevSearchTerm] = useState('');
    const [pageNum, setPageNum] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const pages = Array.from(Array(pageNum).keys());

    const changeSearchTerm = (newSearchTerm) => {
        setPrevSearchTerm(searchTerm);
        setSearchTerm(newSearchTerm);
    }

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        checkIfHasMore();
        if (scrollTop + clientHeight >= scrollHeight && hasMore) {
            setIsLoading(true);
            setPageNum(pageNum => pageNum + 1);
        }
    }

    const checkIfHasMore = () => {
        (searchTerm === '') 
        ? (pageNum-1)*16 >= 898 
            ? setHasMore(false) 
            : setHasMore(true)
        : (pageNum-1)*16 >= pokemonList.length 
            ? setHasMore(false) 
            : setHasMore(true)
    } 

    // change whenever searchterm changes 
    useEffect(() => {
        if (prevSearchTerm !== searchTerm) {
            setPageNum(1);
            setPokemonList(fullPokemonList.filter(pokemon => pokemon.name.startsWith(searchTerm)));
            setIsLoading(false);
        } 
    }, [searchTerm]);

    // initial call
    useEffect(() => {
        (async() => {
            if (!likedPage && localStorage.getItem('access_token')) {
                const fullData = await getFullPokemonList();
                setFullPokemonList(fullData);
                setPokemonList(fullData);
            } else if (localStorage.getItem('access_token')) {
                console.log('this is useEffect in MainLayer.jsx');
                const fullLikedList = await getLikedList();
                setFullPokemonList(fullLikedList);
                setPokemonList(fullLikedList);
            }
        })();
    }, []);

    // whenever like list changes
    useEffect(() => {
        (async() => {
            if (!likedPage && localStorage.getItem('access_token')) {
                const fullData = await getFullPokemonList();
                setFullPokemonList(fullData);
                setPokemonList(fullData);
            } else if (localStorage.getItem('access_token')) {
                console.log('this is useEffect in MainLayer.jsx');
                const fullLikedList = await getLikedList();
                setFullPokemonList(fullLikedList);
                setPokemonList(fullLikedList);
            }
        })();
    }, [likedPage]);

    // call whenever scroll happens
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    });

    return (
        <Styled.MainPage> 
            <Header 
                setSearchTerm={changeSearchTerm} 
                likedPage={likedPage}
            />
            <Styled.GridContainer>
            {pages.map((i) => (
                <Grid 
                    key={i} 
                    pageNum={i+1} 
                    pokemonList={pokemonList} 
                    likedPage={likedPage}
                    setPokemonList={setPokemonList} 
                    setFullPokemonList={setFullPokemonList}
                />
            ))}
            </Styled.GridContainer>
            {isLoading && 
                <Styled.Loading>
                    Loading more pokemons...
                </Styled.Loading>
            }
            
        </Styled.MainPage>
    )
}

export default MainLayer;