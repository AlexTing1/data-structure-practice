class Points() {
  cosntructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  translate(dx, dy) {
    this.x = this.x + dx;
    this.y = this.y + dy;
  }
}

class Rectangle extends Points {
  DEFAULT_WIDTH = 1;
  DEFAULT_HEIGHT = 1;
  rectangleCount = 0;

  constructor(topLeft, width, height) {
    this.topLeft = topLeft;
    this.width = width;
    this.height = height;
  }

  getTopLeft() {
    return this.topLeft;
  }

  setTopLeft(topLeft) {
    this.topLeft = topLeft
  }

  getWidth() {
    return this.width;
  }

  setWidth(width) {
    this.width = width;
  }

  getHeight() {
    return this.height;
  }

  setHeight(height) {
    this.height = height;
  }

  bottomRight() {
    return Points(this.topLeft.x + this.width, this.topLeft.y - this.height;)
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return this.width * 2 + this.height * 2;
  }
}

