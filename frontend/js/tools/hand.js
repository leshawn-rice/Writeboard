class HandTool {
  constructor(color, canvas) {
    this.fill = color;
    this.canvas = canvas;
    this.name = 'Hand';
    this.panning = false;
    this.canvas.canvas.on('mouse:move', (event) => {
      this.handleMouseMove(event);
    });

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

  draw() {
    return;
  }
}

export default HandTool