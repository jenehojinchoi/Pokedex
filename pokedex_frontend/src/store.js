import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { pokemonListReducer, likedPokemonListReducer, searchPokemonReducer } from './reducers/pokemonReducers'

const reducer = combineReducers({
    pokemonList: pokemonListReducer,
    likedPokemonList: likedPokemonListReducer,
    searchedPokemonList: searchPokemonReducer,
})

const initialState = {
    pokemonList: { pokemonList: [] },
    likedPokemonList: { likedPokemonList: [] },
    searchedPokemonList: { searchedPokemons: [] }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store