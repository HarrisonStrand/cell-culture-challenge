import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { drawGame } from './js/utilities/drawGame.js'
import { initiateHour } from './js/utilities/keyPressed.js';
import { reset } from './js/utilities/reset.js'

@Component({
  selector: 'app-cell-culture',
  templateUrl: './cell-culture.component.html',
  styleUrls: ['./cell-culture.component.css']
})
export class CellCultureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const sketch = (p5: any) => {
      p5.preload = () => {
      }
      
      p5.setup = () => {
        reset(p5);
      };

      p5.draw = () => {
        drawGame(p5);
      };

      p5.keyPressed = () => {
        initiateHour(p5);
      };
    };
    let canvas = new p5(sketch);
  }
}
