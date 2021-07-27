import { roundTwo, roundThree } from '../utilities/utilities'

export const initiateHour = (p5) => {
  if (p5.key == '2') {
		roundTwo();
		
  } 
	if (p5.key == '3') {
		roundThree();
	}
};