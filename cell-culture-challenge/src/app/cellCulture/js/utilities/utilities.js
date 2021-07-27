import { cellLayout } from '../game/cellLayout'
import { state } from '../game/state'
import Cell from '../entities/cell'
import * as p5 from 'p5'

export var cols = cellLayout[0].length;
export var rows = cellLayout.length;

const initializeGrid = () => {
	state.totalLivableCount = 0;
	state.unlivableCount = 0;
	for (var i = 0; i < rows; i ++) {
		state.grid[i] = [];
		for (var j = 0; j < cols; j ++) {
				if (cellLayout[i][j] === 'L') {
					state.grid[i][j] = new Cell(p5, j, i, state.w, 'red', true, false)
					if (state.grid[i][j].livable) {
						state.totalLivableCount ++;
						// console.log(state.totalLivableCount)
					}
				} else if (cellLayout[i][j] === '#') {
					state.grid[i][j] = new Cell(p5, j, i, state.w, 'green', true, true)
				} else {
					state.grid[i][j] = new Cell(p5, j, i, state.w, 'blue', false, false)
					if (!state.grid[i][j].livable) {
						state.unlivableCount ++;
						// console.log(state.unlivableCount)
					}
				}
			}
	}
}

export const roundOne = () => {
	initializeGrid();
	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j].countNeighbors();
		}
	}
}

export const roundTwo = () => {
initializeGrid();
	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			if (cellLayout[i][j] === 'L') {
				state.grid[i][j] = new Cell(p5, j, i, state.w, 'green', true, false)
			} else if (cellLayout[i][j] === '#') {
				state.grid[i][j] = new Cell(p5, j, i, state.w, 'green', true, true)
			} else {
				state.grid[i][j] = new Cell(p5, j, i, state.w, 'blue', false, false)
			}
			state.grid[i][j].countNeighbors();
		}
	}
}

export const roundThree = () => {
initializeGrid();
	state.cultureCount = 0;
	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j].countNeighbors();
			if (state.grid[i][j].neighborCount < 4 && state.grid[i][j].livable) {
				state.grid[i][j] = new Cell(p5, j, i, state.w, 'green', true, true)
			}
			if (state.grid[i][j].blossomed ) {
				state.cultureCount ++;
				// console.log(state.cultureCount)
			}
		}
	}
}