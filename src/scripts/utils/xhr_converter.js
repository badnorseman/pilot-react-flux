"use strict";
export function convertXhrToArray(xhr) {
  let parsedXhr = JSON.parse(xhr.responseText);
  let xhrArray = [];

  for (let k in parsedXhr) {
    xhrArray.push(parsedXhr[k])
  }
  return xhrArray;
}
