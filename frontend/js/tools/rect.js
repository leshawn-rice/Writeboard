class RectTool {
  constructor(color='black', canvas=null) {
    this.positions = {
      left: null,
      right: null,
      top: null,
      bottom: null
    }
    this.fill = color;
    this.canvas = canvas;
    this.isDrawing = false;
  }


  handleMouseDown(event) {
    this.isDrawing = true;
    const {x, y} = this.canvas.getMousePosition(event);
    this.positions.left = x;
    this.positions.top = y;
  }

  handleMouseUp(event) {
    const {x, y} = this.canvas.getMousePosition(event);
    this.positions.right = x;
    this.positions.bottom = y;
    this.draw();
  }

  draw() {
    if (!this.isDrawing) return;
    const {top, left, right, bottom} = this.positions;
    if (top == bottom || left == right) return;
    this.canvas.drawRect({
      left: left,
      top: top,
      fill: this.fill,
      width: right - left,
      height: bottom - top
   });
  }
}

export default RectTool;