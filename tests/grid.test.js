import { expect } from '@jest/globals';
import Grid from '../snake/Grid.js';

test('create new grid with default rows and cols', () => {
    const grid = new Grid();
    expect(grid.rows).toBe(22);
    expect(grid.cols).toBe(22);
});

test('create new grid with rows = 15 and cols 22', () => {
    const rows = 15;
    const cols = 22;
    const grid = new Grid(rows, cols);
    expect(grid.rows).toBe(rows);
    expect(grid.cols).toBe(cols);
});
