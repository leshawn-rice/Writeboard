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

    const eventsToUndo = [
      'object:moved', 
      'object:scaled', 
      'object:skewed', 
      'object:rotated'
    ]
    eventsToUndo.forEach((event) => {
      this.canvas.on(event, () => {
        this.render();
      })
    });
  }

  switchTool(tool) {
    const events = {
      'mouse:down': (event) => tool.handleMouseDown(event), 
      'mouse:up': (event) => tool.handleMouseUp(event), 
      'mouse:move': (event) => tool.handleMouseMove(event),
      'object:moving': () => tool.isDrawing = false, 
      'object:scaling': () => tool.isDrawing = false, 
      'object:skewing': () => tool.isDrawing = false,
      'object:rotating': () => tool.isDrawing = false
    };
    for (const [eventName, eventCallback] of Object.entries(events)) {
      this.canvas.__eventListeners[eventName] = []
      this.canvas.on(eventName, eventCallback)
    }
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

  undo() {
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
    const objects = this.canvas.getActiveObject()._objects || [this.canvas.getActiveObject()];
    for (let object of objects) {
      this.canvas.remove(object);
    }
    this.render();
  }
}

export default Canvas;