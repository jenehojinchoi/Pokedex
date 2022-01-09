import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { pokemonListReducer, likedPokemonListReducer } from './reducers/pokemonReducers'

const reducer = combineReducers({
    pokemonList: pokemonListReducer,
    likedPokemonList: likedPokemonListReducer,
})

const initialState = {
    pokemonList: { pokemonList: [] },
    likedPokemonList: { likedPokemonList: [] }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store