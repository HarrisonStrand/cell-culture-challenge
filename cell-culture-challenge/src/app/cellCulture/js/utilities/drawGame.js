import Cell from '../entities/cell'
import { make2DArray, rows, cols} from './utilities'
import {cellLayout} from '../game/cellLayout'
import { state } from '../game/state'

export const drawGame = (p5) => {
	p5.background(0);

	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j].show(p5)
		}
	}

}