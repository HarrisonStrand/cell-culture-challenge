import * as p5 from "p5";
import {cellLayout} from '../game/cellLayout'
import { state } from "../game/state";

export default function Cell(p5, x, y, w, color) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.livable = false;
	this.unlivable = false;
	this.blossomed = false;

	this.countNeighbors = function() {

	}
	
	
	this.show = function(p5) {
		p5.push();
		p5.fill(color)
		p5.stroke('black')
		p5.rect(this.x, this.y, this.w, this.w)
		p5.pop();
	}

}