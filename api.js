const api_url = "/data/pokemon.json"

export function fetchPokemons() {
    return fetch(api_url)
}