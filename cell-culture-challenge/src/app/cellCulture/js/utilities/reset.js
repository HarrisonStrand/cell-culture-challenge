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
			// for (var x = 0; x < cellLayout[i].length; x ++) {
				if (cellLayout[i][j] === 'L') {
					state.grid[i][j] = new Cell(p5, j, i, w, 'red', true)
					// state.grid[i][j].livable = true;
				} else if (cellLayout[i][j] === '#') {
					state.grid[i][j] = new Cell(p5, j, i, w, 'green', true)
				} else {
					state.grid[i][j] = new Cell(p5, j, i, w, 'blue', false)
					// state.grid[i][j].livable = false;
					
				}
			}
		// }
	}


	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j].countNeighbors();
		}
	}
	console.log(state.grid[0][1])
	console.log(state.grid[0][5])
	
}