
import axios from 'axios';

export const signIn = async(email, password) => {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/user/signin`, {
            email: email,
            password: password,
        });
        return res;
    } catch (e) {
        console.log('e: ', e);
        return e;
    }
}

export const signUp = async(email, password) => {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/user/signup`, {
            email: email,
            password: password,
        });
        return res;
    } catch (e) {
        console.log('e: ', e);
        return e;
    }
}

export const getPokemonData = async (pageNum) => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`);
        const pokemonData = data.data.results;
        console.log(pokemonData);
        const pokemonList = pokemonData.map((pokemon, index) => ({
            name: pokemon.name,
            id: index+1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
        }));
        return pokemonList.slice(0, pageNum*16);
    } catch (e) {
        console.log(e);
    }
}

export const getPokemonDataWithSearchTerm = async (searchTerm, pageNum) => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`);
        const pokemonData = data.data.results;
        console.log(pokemonData);
        const pokemonList = pokemonData.map((pokemon, index) => ({
            name: pokemon.name,
            id: index+1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
        }))
        return pokemonList.filter(pokemon => pokemon.name.startsWith(searchTerm)).slice(0, 16*pageNum);
        
    } catch (e) {
        console.log(e);
    }
}

export const likePokemon = async(pokemon) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            "authorization": localStorage.getItem('access_token'),
        },
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/user/like`, {
            email: localStorage.getItem('user'),
            pokemonName: pokemon.name,
            pokemonApiId: pokemon.id
        }, config);
        console.log(res);
        return res;
    } catch (e) {
        console.log('e: ', e);
        return e;
    }
}