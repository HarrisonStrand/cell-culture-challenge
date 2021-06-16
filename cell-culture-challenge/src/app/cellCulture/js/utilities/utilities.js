import { cellLayout } from '../game/cellLayout'
import { state } from '../game/state'
import Cell from '../entities/cell'
import * as p5 from 'p5'

export const make2DArray = (cols, rows) => {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i ++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

export var cols = cellLayout[0].length;
export var rows = cellLayout.length;

export const roundOne = () => { // initial livable spaces

	var w = 20;
	for (var i = 0; i < rows; i ++) {
		state.grid[i] = [];
		for (var j = 0; j < cols; j ++) {
				if (cellLayout[i][j] === 'L') {
					state.grid[i][j] = new Cell(p5, j, i, w, 'red', true, false)
				} else if (cellLayout[i][j] === '#') {
					state.grid[i][j] = new Cell(p5, j, i, w, 'green', true, true)
				} else {
					state.grid[i][j] = new Cell(p5, j, i, w, 'blue', false, false)
				}
			}
	}

	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j].countNeighbors();
		}
	}
}

export const roundTwo = () => { // all cultured and blossomed

	var w = 20;
	for (var i = 0; i < rows; i ++) {
		state.grid[i] = [];
		for (var j = 0; j < cols; j ++) {
				if (cellLayout[i][j] === 'L') {
					state.grid[i][j] = new Cell(p5, j, i, w, 'green', true, false)
				} else {
					state.grid[i][j] = new Cell(p5, j, i, w, 'blue', false, false)
				}
			}
	}

	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j].countNeighbors();
		}
	}
}

export const roundThree = () => { // account for first round of overcrowding

	var w = 20;
	for (var i = 0; i < rows; i ++) {
		state.grid[i] = [];
		for (var j = 0; j < cols; j ++) {
				if (cellLayout[i][j] === 'L') {
					state.grid[i][j] = new Cell(p5, j, i, w, 'red', true, false)
				} else if (cellLayout[i][j] === '#') {
					state.grid[i][j] = new Cell(p5, j, i, w, 'green', true, true)
				} else {
					state.grid[i][j] = new Cell(p5, j, i, w, 'blue', false, false)
				}
			}
	}

	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j].countNeighbors();
			if (state.grid[i][j].neighborCount < 4 && state.grid[i][j].livable) {
				state.grid[i][j] = new Cell(p5, j, i, w, 'green', true, true)
				state.grid[i][j].countNeighbors();
			}
		}
	}
}

export const roundFour = () => { // account for first round of overcrowding

	var w = 20;
	for (var i = 0; i < rows; i ++) {
		state.grid[i] = [];
		for (var j = 0; j < cols; j ++) {
				if (cellLayout[i][j] === 'L') {
					state.grid[i][j] = new Cell(p5, j, i, w, 'red', true, false)
				} else if (cellLayout[i][j] === '#') {
					state.grid[i][j] = new Cell(p5, j, i, w, 'green', true, true)
				} else {
					state.grid[i][j] = new Cell(p5, j, i, w, 'blue', false, false)
				}
			}
	}

	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j].countNeighbors();
			if (state.grid[i][j].neighborCount <= 3 && state.grid[i][j].livable) {
				state.grid[i][j] = new Cell(p5, j, i, w, 'purple', true, true)
				// state.grid[i][j].countNeighbors();
			}
		}
	}
}


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