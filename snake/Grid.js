export default class Grid {
    static #defaultRows = 22;
    static #defaultCols = 22;

    constructor(rows = Grid.#defaultRows, cols = Grid.#defaultCols) {
        this.rows = rows;
        this.cols = cols;
    }
}
