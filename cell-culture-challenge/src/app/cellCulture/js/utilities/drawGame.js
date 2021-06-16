import { rows, cols} from './utilities'
import { state } from '../game/state'

export const drawGame = (p5) => {
	p5.background(0);
	for (var i = 0; i < rows; i ++) {
		for (var j = 0; j < cols; j ++) {
			state.grid[i][j].show(p5)
		}
	}
}