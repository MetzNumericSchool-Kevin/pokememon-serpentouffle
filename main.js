import { fetchPokemons } from "./api.js"
import { resetGrid } from "./dom_modif.js"

const playable_pokemons = fetchPokemons()

resetGrid()
