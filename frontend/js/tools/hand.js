import Tool from './tool.js';

class HandTool extends Tool {
  constructor(color, canvas) {
    super(color, canvas, 'Hand');
    this.panning = false;
  }

  handleMouseDown(event) {
    this.panning = true;
    this.canvas.canvas.selection = false;
    this.canvas.canvas.setCursor('grabbing');
  }

  handleMouseMove(event) {
    if (this.panning && event && event.e) {
      let delta = new fabric.Point(event.e.movementX, event.e.movementY);
      this.canvas.canvas.relativePan(delta);
    }
  }

  handleMouseUp(event) {
    this.panning = false;
    this.canvas.canvas.selection = true;
    this.canvas.canvas.setCursor('default');
  }
}

export default HandTool