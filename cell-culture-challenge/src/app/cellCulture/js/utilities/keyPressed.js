import { roundTwo, roundThree, roundFour } from '../utilities/utilities'
import { state } from '../game/state'
import * as p5 from 'p5'

export const initiateHour = (p5) => {
  if (p5.key == '1' && state.hourCounter === 0) {
		roundTwo();
		state.hourCounter ++;
		console.log(state.hourCounter)
		console.log(state.grid[0][0])
		console.log(state.grid[5][2])
		console.log(state.grid[40][0])
		console.log(state.grid[41][0])
  } 
	if (p5.key == '2' && state.hourCounter === 1) {
		roundThree();
		state.hourCounter ++
		console.log(state.hourCounter)
		console.log(state.grid[0][0])
		console.log(state.grid[5][2])
		console.log(state.grid[40][0])
		console.log(state.grid[41][0])
	}
	if (p5.key == '3' && state.hourCounter === 2) {
		roundFour();
		state.hourCounter ++
		console.log(state.hourCounter)
		console.log(state.grid[0][0])
		console.log(state.grid[5][2])
		console.log(state.grid[40][0])
		console.log(state.grid[41][0])
	}
};