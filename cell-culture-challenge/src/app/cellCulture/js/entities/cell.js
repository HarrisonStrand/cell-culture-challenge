import { cols, rows } from '../utilities/utilities'
import { state } from "../game/state";

export default function Cell(p5, j, i, w, color, livable, blossomed) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
	this.livable = livable;
	this.blossomed = blossomed;
	this.neighborCount = 0;

	this.countNeighbors = function() {
		// console.count();
		var total = 0;
		if (this.livable) {
			total = -1;
		}
		for (var xoff = -1; xoff <= 1; xoff ++) {
			for (var yoff = -1; yoff <= 1; yoff ++) {
				var i = this.i + xoff;
				var j = this.j + yoff;
				if (j > -1 && j < cols && i > -1 && i < rows) {
					var neighbor = state.grid[i][j];
					if (neighbor.livable && !neighbor.blossomed) {
						total++;
					} else if ((neighbor.livable && neighbor.blossomed)) {
						total --;
						// console.count(total);
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
	}
}