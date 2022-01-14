import Canvas from './tools/canvas.js';
import RectTool from './tools/rect.js';
import PointerTool from './tools/pointer.js';
import HandTool from './tools/hand.js';
import './navbar.js';
import './toolbar.js';


const canvas = new Canvas();
let fillColor = 'red';
const tools = {
  pointer: new PointerTool(fillColor, canvas),
  rect: new RectTool(fillColor, canvas),
  hand: new HandTool(fillColor, canvas)
}

function switchTool(toolName) {
  let tool = tools[toolName];
  if (!tool) tool = tools.pointer;
  tool.fill = fillColor;
  canvas.switchTool(tool);
}

switchTool('rect');
canvas.render();

export {switchTool};