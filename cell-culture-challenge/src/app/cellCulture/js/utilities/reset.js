import Cell from '../entities/cell'
import { state } from '../game/state';
import { make2DArray, rows, cols, roundOne} from './utilities'
import { cellLayout } from '../game/cellLayout'

export const reset = (p5, canvas) => {
	canvas = p5.createCanvas(2000, 2000);
	canvas.parent('cell-culture-container');
	var count = 0;
	count++;
	// var w = 20;

	state.grid = [];

	roundOne();



	//run this as a function with a counter when key pressed
	// for (var i = 0; i < rows; i ++) {
	// 	state.grid[i] = [];
	// 	for (var j = 0; j < cols; j ++) {
	// 			if (cellLayout[i][j] === 'L') {
	// 				state.grid[i][j] = new Cell(p5, j, i, w, 'red', true, false)
	// 			} else if (cellLayout[i][j] === '#') {
	// 				state.grid[i][j] = new Cell(p5, j, i, w, 'green', true, true)
	// 			} else {
	// 				state.grid[i][j] = new Cell(p5, j, i, w, 'blue', false, false)
	// 			}
	// 		}
	// }


	// var count = 0;
	// for (var i = 0; i < rows; i ++) {
	// 	for (var j = 0; j < cols; j ++) {
	// 		state.grid[i][j].countNeighbors();
	// 		if (state.grid[i][j].neighborCount > 3 && state.grid[i][j].livable) {
	// 			count++;
	// 			state.grid[i][j] = new Cell(p5, j, i, w, 'green', true, true)
	// 			state.grid[i][j].countNeighbors();
	// 		}
	// 	}
	// }
	console.log(count)
	console.log(state.grid[0][0])
	console.log(state.grid[5][2])
	console.log(state.grid[40][0])
	console.log(state.grid[41][0])
	// console.log(state.grid[0][5])
	
}