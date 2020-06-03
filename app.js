"use strict"

import Vector from './vector.js';

window.onload = () => {
  let v1 = new Vector();
  let v2 = new Vector();
  console.log(v1.getX(), v1.getY());
  v1.setX(5);
  v1.setY(5);
  v2.setX(5);
  v2.setY(5);
  let v3 = v1.add(v2);
  console.log(v3.getX(), v3.getY());
  console.log(v1.getLength());
  console.log(v1.getAngle());
  console.log(v1.getAngleDegrees());
  v3.norm();
  console.log(v3.getX(), v3.getY(), v3.getLength());
  let v4 = new Vector();
  v4.setAngle(Math.PI / 6);
  v4.setLength(100);
  console.log(v4.getX(), v4.getY());
};