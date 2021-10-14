import Grid from './snake/Grid.js';
import SnakeUI from './snake/SnakeUI.js';

window.addEventListener('load', () => {
    const canvasWidth = 440;
    const canvasheight = 440;

    const snakeCanvas = document.querySelector('#snake-canvas');
    if (snakeCanvas == null) throw new Error('No #snake-game canvas element');
    if (!snakeCanvas.getContext) throw new Error('Canvas not supported');
    snakeCanvas.width = canvasWidth;
    snakeCanvas.height = canvasheight;

    const grid = new Grid();
    const cellSize = canvasWidth / grid.cols;

    const snakeUi = new SnakeUI(snakeCanvas.getContext('2d'));
    snakeUi.drawGrid(grid, cellSize);

    console.log('Snake game!');
});