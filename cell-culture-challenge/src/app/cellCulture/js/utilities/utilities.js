import { cellLayout } from '../game/cellLayout'

export const make2DArray = (cols, rows) => {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i ++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

export var cols = cellLayout[0].length;
export var rows = cellLayout.length;
