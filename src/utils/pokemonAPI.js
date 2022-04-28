export const getPokemons = (limit = 251, offset = 0) => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset)
        .then(response => response.json());
};

export const getPokemon = (name = '') => {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        .then(response => response.json());
};
