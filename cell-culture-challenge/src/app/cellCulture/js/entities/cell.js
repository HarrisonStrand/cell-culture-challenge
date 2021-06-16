import * as p5 from "p5";
import { cols, rows } from '../utilities/utilities'
import {cellLayout} from '../game/cellLayout'
import { state } from "../game/state";

export default function Cell(p5, j, i, w, color, livable, blossomed) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
	this.livable = livable;// true if 'L', false if '.'
	this.blossomed = blossomed;
	this.neighborCount = 0;
	this.marked = '*'

	this.countNeighbors = function() {
		console.count();

		var total = 0;
		//accounts for selected cell without neighbors
		if (this.livable) {
			total = -1;
		}

		// || (neighbor.blossomed || !neighbor.livable)

		//acounts for edge cells to find neighbors
		for (var xoff = -1; xoff <= 1; xoff ++) { //offset in the x direction
			for (var yoff = -1; yoff <= 1; yoff ++) { //offset in the y direction
				var i = this.i + xoff; // rows
				var j = this.j + yoff; //cols
				if (j > -1 && j < cols && i > -1 && i < rows) {
					var neighbor = state.grid[i][j];
					if (neighbor.livable && !neighbor.blossomed) { //if its red
						total++;
					} else if ((neighbor.livable && neighbor.blossomed)) { // if green
						console.count(total);
						var roundCount = 0;
						
						total --;
					}
				}
			}
		}
		this.neighborCount = total;
	}
	
	this.show = function(p5) {
		p5.push();
		p5.fill(color)
		p5.stroke('black')
		p5.rect(this.x, this.y, this.w, this.w)
		p5.pop();
		if (this.livable && !this.blossomed) {
			p5.push();
			p5.fill('black')
			p5.stroke('black')
			p5.text(this.neighborCount, this.x + this.w * .5, this.y + this.w -2)
			p5.pop();
		}
		// } else if (this.blossomed) {
		// 	p5.push();
		// 	p5.fill('black')
		// 	p5.stroke('black')
		// 	p5.text(this.marked, this.x + this.w * .5, this.y + this.w -2)
		// 	p5.pop()
		// }
	}

}