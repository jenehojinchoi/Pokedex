import {
    POKEMON_LIST_REQUEST,
    POKEMON_LIST_SUCCESS,
    POKEMON_LIST_FAIL,

    LIKED_POKEMON_LIST_REQUEST,
    LIKED_POKEMON_LIST_SUCCESS,
    LIKED_POKEMON_LIST_FAIL,

    LIKE_POKEMON_REQUEST,
    LIKE_POKEMON_SUCCESS,
    LIKE_POKEMON_FAIL,

    SEARCH_POKEMON_REQUEST,
    SEARCH_POKEMON_SUCCESS,
    SEARCH_POKEMON_FAIL,
} from '../constants/pokemonConstants';

export const pokemonListReducer = (state = { pokemons :[] }, action) => {
    switch(action.type){
        case POKEMON_LIST_REQUEST:
            return { loading: true, pokemons: [] }

        case POKEMON_LIST_SUCCESS:
            return { loading: false, pokemons: action.payload }

        case POKEMON_LIST_FAIL:
            return { loading: false, error: action.payload }
            
        default: 
            return state
    }
}

export const likedPokemonListReducer = (state = { likedPokemons :[] }, action) => {
    switch(action.type){
        case LIKED_POKEMON_LIST_REQUEST:
            return { loading: true, likedPokemons: [] }

        case LIKED_POKEMON_LIST_SUCCESS:
            return { loading: false, likedPokemons: action.payload }

        case LIKED_POKEMON_LIST_FAIL:
            return { loading: false, error: action.payload }
            
        default: 
            return state
    }
}

export const likePokemonReducer = (state = { }, action) => {
    switch(action.type){
        case LIKE_POKEMON_REQUEST:
            return { loading: true, res: [] }

        case LIKE_POKEMON_SUCCESS:
            return { loading: false, res: action.payload }

        case LIKE_POKEMON_FAIL:
            return { loading: false, error: action.payload }
            
        default: 
            return state
    }
}

export const searchPokemonReducer = (state = { searchedPokemons: [] }, action) => {
    switch(action.type){
        case SEARCH_POKEMON_REQUEST:
            return { loading: true, searchedPokemons: [] }

        case SEARCH_POKEMON_SUCCESS:
            return { loading: false, searchedPokemons: action.payload }

        case SEARCH_POKEMON_FAIL:
            return { loading: false, error: action.payload }
            
        default: 
            return state
    }
}