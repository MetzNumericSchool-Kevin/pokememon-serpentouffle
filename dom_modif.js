
const GRID_NB_COLUMNS = 4
const GRID_NB_LINES = 3
const GRID_NB_CELLS = GRID_NB_COLUMNS * GRID_NB_LINES

const GAME_GRID = document.getElementById("grille_de_jeu")

export function resetGrid() {
    for (let i=1; i<=GRID_NB_CELLS; i++) {
        let cell_image = GAME_GRID.querySelector(`.box:nth-child(${i}) > img`)
        cell_image.src = "assets/bush.webp"
        cell_image.classList = "bush"
        let pokeball_img = GAME_GRID.querySelector(`.box:nth-child(${i}) img:nth-child(2)`)
        
        if (pokeball_img) {
            pokeball_img.remove()
        }
    }
}