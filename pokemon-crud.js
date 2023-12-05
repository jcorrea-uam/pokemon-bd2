const JUST_BULBASAUR = {
    id: 1,
    name: "Bulbasaur",
    species: "Seed Pokémon",
    description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    hires: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
    thumbnail: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
    sprite: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
    types: ["Grass", "Poison"]
};

/**
 * Devuelve una lista con todos los pokemon
 * @param {integer} limit el número de resultados a devolver, -1 indica que no hay límite
 * @param {integer} offset el número de elementos a omitir del principio de la lista de resultados
 * @returns
 */
async function listPokemon(limit = -1, offset = 0) {
    return [JUST_BULBASAUR, JUST_BULBASAUR, JUST_BULBASAUR];
}

/**
 * Busca pokemon utilizando el criterio dado
 * @param {string|object} query Una cadena que debe buscarse dentro del nombre, especie o descripcion del pokemon. 
 * También puede ser un objeto con los campos id, name, species, description o types con criterios de búsqueda para 
 * encontrar pokemon
 * @param {integer} limit el número de resultados a devolver, -1 indica que no hay límite
 * @param {integer} offset el número de elementos a omitir del principio de la lista de resultados
 * @returns la lista de pokemon que coinciden con el criterio de búsqueda
 */
async function queryPokemon(query, limit = -1, offset = 0) {
    return [JUST_BULBASAUR, JUST_BULBASAUR, JUST_BULBASAUR];
}

/**
 * Devuelve las evoluciones del pokemon dado
 * @param {string} pid 
 * @returns la lista de pokemon que son evoluciones del pokemon dado.
 */
async function getEvolutions(pid) {
    return [JUST_BULBASAUR, JUST_BULBASAUR];
}

/**
 * Determina el resultado de una batalla entre dos equipos de pokemon segun sus tipos.
 * @param {string[]} teamA lista de ids de los pokemon en el equipo A
 * @param {string[]} teamB lista de ids de los pokemon en el equipo B
 * @returns Resultado de una batalla uno a uno entre los pokemon con los id especificados en
 * cada equipo, donde 1 indica que gana el pokemon del equipo A, -1 que el ganador es el pokemon del equipo B
 * y 0 que hay un empate.
 */
async function simulateBattle(teamA, teamB) {
    return [0, 1, -1];
}

/**
 * Encuentra pokemon que son fuertes contra todos los pokemon dados
 * @param {string|string[]} pid the id of the pokemon 
 * @returns Un pokemon que es fuerte contra todos los pokemon dados
 */
async function findStrongAgainst(pid) {
    return JUST_BULBASAUR;
}

exports.listPokemon = listPokemon;
exports.queryPokemon = queryPokemon;
exports.getEvolutions = getEvolutions;
exports.simulateBattle = simulateBattle;
exports.findStrongAgainst = findStrongAgainst;