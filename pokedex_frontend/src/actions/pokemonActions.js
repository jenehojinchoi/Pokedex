import {
    POKEMON_LIST_REQUEST,
    POKEMON_LIST_SUCCESS,
    POKEMON_LIST_FAIL,

    LIKED_POKEMON_LIST_REQUEST,
    LIKED_POKEMON_LIST_SUCCESS,
    LIKED_POKEMON_LIST_FAIL,
} from '../constants/pokemonConstants';

import {
    getFullPokemonList,
    getLikedList
} from '../lib/api';

export const getPokemonList = () => async (dispatch) => {
    try {
        dispatch({
            type: POKEMON_LIST_REQUEST
        })

        const data = await getFullPokemonList();

        dispatch({
            type: POKEMON_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: POKEMON_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getLikedPokemonList = () => async (dispatch) => {
    try {
        dispatch({
            type: LIKED_POKEMON_LIST_REQUEST
        })

        const data = await getLikedList();
        console.log(data)

        dispatch({
            type: LIKED_POKEMON_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LIKED_POKEMON_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}