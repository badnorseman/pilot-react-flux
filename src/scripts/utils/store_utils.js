"use strict";

export function toArray(obj) {
  let array = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      array.push(obj[key]);
    }
  }
  return array;
}
