class Points() {
  constructor(xDim, yDim) {
    this.xDim = xDim;
    this.yDim = yDim;
  }
}

class Rectangle extends Points {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return this.width * 2 + this.height * 2;
  }

  shiftRectangle(newX, newY) {
    setX(newX);
    setY(newY);
  }

  changeDimensions(newWidth, newHeight) {
    setWidth(newWidth);
    setHeight(newHeight);
  }
}

