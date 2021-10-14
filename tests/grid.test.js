import { expect } from '@jest/globals';
import Grid from '../snake/Grid.js';

test('create new grid with rows = 20 and cols = 20', () => {
    const rows = 20;
    const cols = 20;
    const grid = new Grid(rows, cols);
    expect(grid.rows).toBe(rows);
    expect(grid.cols).toBe(cols);
});

test('create new grid with rows = 15 and cols 22', () => {
    const rows = 15;
    const cols = 22;
    const grid = new Grid(rows, cols);
    expect(grid.rows).toBe(rows);
    expect(grid.cols).toBe(cols);
});
