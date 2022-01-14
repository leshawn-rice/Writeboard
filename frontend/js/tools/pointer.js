import Tool from './tool.js';

class PointerTool extends Tool {
  constructor(color, canvas) {
    super(color, canvas, 'Pointer');
  }

  handleMouseDown(event) {
    return;
  }

  handleMouseUp(event) {
    return;
  }
}

export default PointerTool