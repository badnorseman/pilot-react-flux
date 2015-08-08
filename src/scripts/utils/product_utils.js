"use strict";
import $ from "jquery";
import { PRODUCTS } from "../constants/api_routes";
import * as ProductActions from "../actions/product_actions";
import { Promise } from "es6-promise";

function buildFormData(data) {
  return function(data, formData = new FormData()) {
    Object.keys(data).forEach(key => {
      formData.append(`product[${key}]`, data[key]);
    })
    return formData;
  }(data)
}

// function buildHeaders() {
//   return (
//   )
// }

// function buildUrl(obj) {
//   return (
//   )
// }

export function create(data) {
  return (
    $.ajax({
      url: PRODUCTS,
      dataType: "json",
      type: "POST",
      headers: {
        "Authorization": `Token token=${localStorage.token}`
      },
      processData: false,
      contentType: false,
      data: buildFormData(data)
    })
  )
}

export function destroy(id) {
  return (
    $.ajax({
      url: `${PRODUCTS}/${id}`,
      dataType: "json",
      type: "DELETE",
      headers: {
        "Authorization": `Token token=${localStorage.token}`
      }
    })
  )
}

export function load() {
  return (
      $.ajax({
      url: PRODUCTS,
      dataType: "json",
      type: "GET"
    })
  )
}

export function update(data) {
  return (
    $.ajax({
      url: `${PRODUCTS}/${data.id}`,
      dataType: "json",
      type: "PATCH",
      headers: {
        "Authorization": `Token token=${localStorage.token}`
      },
      processData: false,
      contentType: false,
      data: buildFormData(data)
    })
  )
}
