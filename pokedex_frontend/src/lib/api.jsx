
import axios from 'axios';

export const getPokemonData = async () => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        console.log('getPokemonData');
        console.log(data);
        return data.data.results;
    } catch (e) {
        console.log(e);
    }
}

export const getPokemonDataWithSearchTerm = async (searchTerm) => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        console.log('getPokemonData with SearchTerm');
        const pokemonList = data.data.results.filter(pokemon => pokemon.name.startsWith(searchTerm));
        return pokemonList;
    } catch (e) {
        console.log(e);
    }
}