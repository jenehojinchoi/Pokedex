import {
    POKEMON_LIST_REQUEST,
    POKEMON_LIST_SUCCESS,
    POKEMON_LIST_FAIL,
} from '../constants/pokemonConstants';

import {
    getFullPokemonList
} from '../lib/api';

export const getPokemonList = () => async (dispatch) => {
    try {
        dispatch({
            type: POKEMON_LIST_REQUEST
        })

        const data = await getFullPokemonList();
        console.log(data)

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