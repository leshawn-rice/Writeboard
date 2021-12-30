import React, { useLayoutEffect, useState } from 'react';
import rough from 'roughjs/bundled/rough.esm';

const gen = rough.generator();

function createElement(x1, y1, x2, y2) {
  const roughEle = gen.line(x1, y1, x2, y2);
  return { x1, y1, x2, y2, roughEle };
}

const Line = (canvas, ctx) => {
  const [elements, setElements] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  useLayoutEffect(() => {
    const render = (canvas, ctx) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const rc = rough.canvas(canvas);
      elements.forEach((ele) => rc.draw(ele.roughEle));
    }
    render(canvas, ctx);
  }, [canvas, ctx, elements]);

  const startDrawing = (event) => {
    setIsDrawing(true);
    const { clientX, clientY } = event;
    const newEle = createElement(clientX, clientY, clientX, clientY);
    setElements((state) => [...state, newEle]);
  };
  const finishDrawing = () => {
    setIsDrawing(false);
  };
  const draw = (event) => {
    if (isDrawing) {
      const { clientX, clientY } = event;
      const index = elements.length - 1;
      const { x1, y1 } = elements[index];
      const updatedEle = createElement(x1, y1, clientX, clientY);
      const copyElement = [...elements];
      copyElement[index] = updatedEle; 
      setElements(copyElement);
    }
  };
  return (<></>);
};
export default Line;