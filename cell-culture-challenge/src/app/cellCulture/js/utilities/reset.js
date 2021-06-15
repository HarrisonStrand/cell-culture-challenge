import Cell from '../entities/cell'
import { state } from '../game/state';
import { make2DArray } from './utilities'
import { cellLayout } from '../game/cellLayout'

export const reset = (p5, canvas) => {
	canvas = p5.createCanvas(2000, 2000);
	canvas.parent('cell-culture-container');

	var w = 20;
	var cols = cellLayout[0].length;
	var rows = cellLayout.length;

	state.grid = [];


	//run this as a function with a counter when key pressed
	for (var i = 0; i < rows; i ++) {
		state.grid[i] = [];
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j] = new Cell(p5, j * w, i * w, w, 'blue')
			for (var x = 0; x < cellLayout[i].length; x ++) {
				if (cellLayout[i][x] === 'L') {
					state.grid[i][x] = new Cell(p5, x * w, i * w, w, 'red')
				} else if (cellLayout[i][x] === '#') {
					state.grid[i][x] = new Cell(p5, x * w, i * w, w, 'green')
				}
			}
		}
	}

	console.log(state.grid[0][0]) //91
	console.log(cellLayout[0][0]) //91
	console.log(cellLayout.length) //97

}