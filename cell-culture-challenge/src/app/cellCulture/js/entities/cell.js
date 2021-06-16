import * as p5 from "p5";
import { cols, rows } from '../utilities/utilities'
import {cellLayout} from '../game/cellLayout'
import { state } from "../game/state";

export default function Cell(p5, i, j, w, color, livable) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
	this.livable = livable;// true if 'L', false if '.'
	this.blossomed = false;
	this.neighborCount = 0;

	this.countNeighbors = function() {
		var total = 0;
		if (this.livable) {
			total = -1;
		}

		for (var xoff = -1; xoff <= 1; xoff ++) { //offset in the x direction
			for (var yoff = -1; yoff <= 1; yoff ++) { //offset in the y direction
				var i = this.i + xoff;
				var j = this.j + yoff;
				if (j > -1 && j < cols && i > -1 && i < rows) {
					var neighbor = state.grid[i][j];
					if (neighbor.livable) { //possible fix
						total++;
					}
				}
			}
		}
		this.neighborCount = total;
	}
	//if livable then count number of neighbors for overcrowding
	//if neighbors is over 3 then change color to die off
	//if not livable return something, maybe a color?
	//if blossomed then count number of neighhbors again for overcrowding
	
	this.show = function(p5) {
		p5.push();
		p5.fill(color)
		p5.stroke('black')
		p5.rect(this.x, this.y, this.w, this.w)
		p5.pop();
		p5.push();
		p5.fill('black')
		p5.stroke('black')
		p5.text(this.neighborCount, this.x + this.w * .5, this.y + this.w -2)
		p5.pop();
	}

}