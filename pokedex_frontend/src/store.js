import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    pokemonListReducer, 
    likedPokemonListReducer, 
    searchPokemonReducer, 
    searchLikedPokemonReducer 
} from './reducers/pokemonReducers'

const reducer = combineReducers({
    pokemonList: pokemonListReducer,
    likedPokemonList: likedPokemonListReducer,
    searchedPokemonList: searchPokemonReducer,
    searchedLikedPokemonList: searchLikedPokemonReducer,
})

const initialState = {
    pokemonList: { pokemons: [] },
    likedPokemonList: { likedPokemons: [] },
    searchedPokemonList: { searchedPokemons: [] },
    searchedLikedPokemonList: { searchedLikedPokemons: [] },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store