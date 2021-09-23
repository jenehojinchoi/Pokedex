import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://3.101.147.69:8000',
    headers: {
        "Content-type": "application/json",
        "Authorization": localStorage.getItem('access_token'),
    },
})

export const signIn = async(email, password) => {
    try {
        const res = await instance.post(`/user/signin`, {
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
        const res = await instance.post(`/user/signup`, {
            email: email,
            password: password,
        });
        return res;
    } catch (e) {
        console.log('e: ', e);
        return e;
    }
}

export const getFullPokemonList = async () => {
    try {
        const fullData = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`);
        const fullPokemonList = fullData.data.results.map((pokemon, index) => ({
            name: pokemon.name,
            id: index+1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
        }));
        return fullPokemonList;
    } catch(e) {
        console.log(e);
    }
}

export const getPokemonDetail = async (apiId) => {
    try {
        const fullPokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${apiId}`);
        const pokemon = fullPokemonData.data;
        const pokemonData = {
            name: pokemon.name,
            id: apiId,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${apiId}.png`,
            abilities: pokemon.abilities,
            types: pokemon.types,
            moves: pokemon.moves,
        };
        return pokemonData;
    } catch(e) {
        console.log(e);
    }
}

export const likePokemon = async(pokemon) => {
    try {
        const res = await instance.post(`user/like`, {
            email: localStorage.getItem('user'),
            pokemonName: pokemon.name,
            pokemonApiId: pokemon.id
        });
        return res;
    } catch (e) {
        console.log('e: ', e);
        return e;
    }
}

export const getLikedList = async() => {
    const params = {
        params: {
            "email": localStorage.getItem('user'),
        },
    }

    try {
        const data = await instance.get(`/user/likedlist`, params);

        const likedList = data.data.data.likedPokemonList;
        const likedListofApiId = likedList.map((pokemon) => 
            pokemon.apiId
        )

        const fullData = await getFullPokemonList();
        const fullLikedList = fullData.filter((pokemon) =>
            likedListofApiId.includes(pokemon.id)
        )
        return fullLikedList;
        
    } catch (e) {
        console.log(e);
    }
}