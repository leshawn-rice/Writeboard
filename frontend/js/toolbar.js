import {switchTool} from './app.js';

const toolbar = document.querySelector('#toolbar');

toolbar.addEventListener('click', (event) => {
  if (event.target.classList.contains('toolbar-item') || event.target.parentNode.classList.contains('toolbar-item')) {
    let toolName = event.target.dataset.tool;
    if (!toolName) toolName = event.target.parentNode.dataset.tool;
    switchTool(toolName);
  }
});