class PenTools {
  constructor() {
    this.points = [];
    this.isDrawing = false;
    this.position = {x: 0, y: 0}
    this.lineCap = 'round';
    this.strokeStyle = 'black';
    this.lineWidth = 2;
  }


  startDrawing(evt) {
    this.isDrawing = true;
    const {clientX, clientY} = evt;
    this.position.x = clientX;
    this.position.y = clientY;
  }

  draw(evt) {
    if (!this.isDrawing) return;

    this.points.push(this.position);
    // contextRef.current.moveTo(pos.x, pos.y);
    const { clientX, clientY } = evt;
    this.position.x = clientX;
    this.position.y = clientY;
  }

  stopDrawing() {
    this.isDrawing = false;
  }
}