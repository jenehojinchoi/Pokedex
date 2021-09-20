
import axios from 'axios';

export const getPokemonData = async (pageNum) => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`);
        const pokemonData = data.data.results;
        return pokemonData.slice(0, pageNum*16);
    } catch (e) {
        console.log(e);
    }
}

export const getPokemonDataWithSearchTerm = async (searchTerm, pageNum) => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`);
        const pokemonData = data.data.results.filter(pokemon => pokemon.name.startsWith(searchTerm))
        const pokemonList = pokemonData.slice(0, 16*pageNum);
        return pokemonList;
        
    } catch (e) {
        console.log(e);
    }
}