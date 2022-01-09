import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { Header, Grid } from '../index';
import { getPokemonList } from '../../actions/pokemonActions'

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
    const [searchTerm, setSearchTerm] = useState('');
    const [prevSearchTerm, setPrevSearchTerm] = useState('');
    const [pageNum, setPageNum] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const pages = Array.from(Array(pageNum).keys());

    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.pokemonList)
    const { loading, error, pokemons } = pokemonList

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
        : (pageNum-1)*16 >= pokemons.length 
            ? setHasMore(false) 
            : setHasMore(true)
    } 

    // change whenever searchterm changes 
    useEffect(() => {
        if (prevSearchTerm !== searchTerm) {
            setPageNum(1);
            setIsLoading(false);
        } 
    }, [searchTerm]);

    // initial call
    useEffect(() => {
        dispatch(getPokemonList())
    }, [dispatch]);

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
                    likedPage={likedPage}
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