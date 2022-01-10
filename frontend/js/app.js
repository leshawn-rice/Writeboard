import Pencil from './tools/pencil.js';

class Canvas {
  constructor() {
    this.canvas = new fabric.Canvas('canvas');
    document.addEventListener('resize', this.sizeCanvas);
    this.sizeCanvas();
  }

  sizeCanvas() {
    this.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.canvas.setWidth(this.width);
    this.canvas.setHeight(this.height);
  }

  draw() {
    // continue;
    // canvas.renderAll();
  }

  render() {
    this.canvas.renderAll();
  }

  drawRect(rectObj) {
    const rect = new fabric.Rect(rectObj);
    this.canvas.add(rect)
    this.render()
  }
}

const canvas = new Canvas();

canvas.drawRect({
   left: 100,
   top: 100,
   fill: 'red',
   width: 20,
   height: 20
})

canvas.render();

// const tools = {
//   pencil: new Pencil()
// }

// const canvas = new fabric.Canvas('canvas');

// // create a rectangle object
// const rect = new fabric.Rect({
//  left: 100,
//  top: 100,
//  fill: 'red',
//  width: 20,
//  height: 20
// });

// // "add" rectangle onto canvas
// canvas.add(rect);