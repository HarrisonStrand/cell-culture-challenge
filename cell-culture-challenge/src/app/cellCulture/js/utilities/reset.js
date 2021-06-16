import { state } from '../game/state';
import { roundOne } from './utilities'

export const reset = (p5, canvas) => {
	canvas = p5.createCanvas(2000, 2000);
	canvas.parent('cell-culture-container');
	state.grid = [];
	roundOne();
}