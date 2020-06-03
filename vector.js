"use strict"

export default class Vector {
  constructor() {
    this._x = 1;
    this._y = 0;
  }

  setX(x) {
    this._x = x;
  }

  setY(y) {
    this._y = y;
  }

  getX() {
    return this._x;
  }

  getY() {
    return this._y;
  }

  getAngle() {
    return Math.atan2(this._y, this._x);
  }

  getAngleDegrees() {
    return this.getAngle() * 180 / Math.PI;
  }

  setAngle(angle) {
    let length = this.getLength();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  }

  getLength() {
    return Math.hypot(this._x, this._y);
  }

  setLength(length) {
    let angle = this.getAngle();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  }

  create(x,y) {
    let v = new Vector();
    v.setX(x);
    v.setY(y);
    return v;
  }

  add(vec) {
    return this.create(this._x + vec.getX(), this._y + vec.getY());
  }

  sub(vec) {
    return this.create(this._x - vec.getX(), this._y - vec.getY());
  }

  multiply(scalar) {
    return this.create(this._x * scalar, this._y * scalar);
  }

  norm() {
    let length = this.getLength();
    this._x /= length;
    this._y /= length;
  }
}




















