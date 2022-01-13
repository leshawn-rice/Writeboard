// Create a button/way to bring objects forward/backward (layering)

class Canvas {
  constructor() {
    this.canvas = new fabric.Canvas('canvas');
    this.state = null;
    this.prevState = null;
    window.addEventListener('resize', () => {
      this.sizeCanvas();
    });
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Delete') {
        this.deleteCurrentObject();
      }
      else if (event.ctrlKey && event.key === 'z') {
        this.undo();
      }
    });
    this.sizeCanvas();
    // Events to record that can be undone
    this.canvas.on('object:moved', (event) => {
      this.render();
    });
    this.canvas.on('object:scaled', (event) => {
      this.render();
    });
    this.canvas.on('object:skewed', (event) => {
      this.render();
    });
    this.canvas.on('object:rotated', (event) => {
      this.render();
    });
  }

  switchTool(tool) {
    this.canvas.on('mouse:down', (event) => {
      tool.handleMouseDown(event);
    });
    this.canvas.on('object:moving', () => {
      tool.isDrawing = false;
    });
    this.canvas.on('object:scaling', () => {
      tool.isDrawing = false;
    });
    this.canvas.on('object:skewing', () => {
      tool.isDrawing = false;
    });
    this.canvas.on('object:rotating', () => {
      tool.isDrawing = false;
    });
    this.canvas.on('mouse:up', (event) => {
      tool.handleMouseUp(event);
    });
  }

  getMousePosition(event) {
    return this.canvas.getPointer(event);
  }

  sizeCanvas() {
    this.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.canvas.setWidth(this.width);
    this.canvas.setHeight(this.height);
    this.render();
  }

  draw() {
    // continue;
    // canvas.renderAll();
  }

  undo() {
    console.log("UNDO")
    this.canvas.loadFromJSON(JSON.stringify(this.prevState));
    this.render();
  }

  render() {
    this.canvas.renderAll();
    this.prevState = this.state;
    this.state = this.canvas.toDatalessJSON();
  }

  drawRect(rectObj) {
    const rect = new fabric.Rect(rectObj);
    this.canvas.add(rect)
    this.render()
  }

  deleteCurrentObject() {
    this.canvas.remove(this.canvas.getActiveObject());
    this.render();
  }
}

export default Canvas;