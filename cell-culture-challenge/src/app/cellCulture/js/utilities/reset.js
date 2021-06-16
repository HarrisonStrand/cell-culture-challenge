import Cell from '../entities/cell'
import { state } from '../game/state';
import { make2DArray, rows, cols } from './utilities'
import { cellLayout } from '../game/cellLayout'

export const reset = (p5, canvas) => {
	canvas = p5.createCanvas(2000, 2000);
	canvas.parent('cell-culture-container');

	var w = 20;

	state.grid = [];


	//run this as a function with a counter when key pressed
	for (var i = 0; i < rows; i ++) {
		state.grid[i] = [];
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j] = new Cell(p5, j, i, w, 'blue')
			for (var x = 0; x < cellLayout[i].length; x ++) {
				if (cellLayout[i][x] === 'L') {
					state.grid[i][x] = new Cell(p5, x, i, w, 'red')
				} else if (cellLayout[i][x] === '#') {
					state.grid[i][x] = new Cell(p5, x, i, w, 'green')
				}
			}
		}
	}

	//can't count neighbors until grid is initialized - explain reason for duplicate code

	for (var i = 0; i < rows; i ++) {
		state.grid[i] = [];
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j] = new Cell(p5, j, i, w, 'blue')
			for (var x = 0; x < cellLayout[i].length; x ++) {
				if (cellLayout[i][x] === 'L') {
					state.grid[i][x] = new Cell(p5, x, i, w, 'red')
					state.grid[i][x].livable = true;
				} else if (cellLayout[i][x] === '#') {
					state.grid[i][x] = new Cell(p5, x, i, w, 'green')
				}
			}
		}
	}
	state.grid[0][1].countNeighbors();
	state.grid[0][5].countNeighbors();
	console.log(state.grid[0][1].neighborCount)
	console.log(state.grid[0][1])
	console.log(state.grid[0][2])

}