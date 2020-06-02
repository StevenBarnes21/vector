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
}




















