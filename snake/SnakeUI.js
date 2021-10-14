export default class SnakeUI {
    #context = null;
    #color1 = '#fff';
    #color2 = 'rgba(0, 0, 0, 0.05)';

    constructor(context) {
        this.#context = context;
    }

    drawGrid(grid, cellSize) {
        for (let row = 0; row < grid.rows; row++) {
            for (let col = 0; col < grid.rows; col++) {
                let color = this.#color1;
                if ((row % 2 == 0 && col % 2 == 0) || (row % 2 != 0 && col % 2 != 0)) {
                    color = this.#color2;
                }
                this.#drawCell(row, col, cellSize, color);
            }
        }
    }

    #drawCell(row, col, cellSize, color) {
        this.#context.fillStyle = color;
        this.#context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
    }
}
