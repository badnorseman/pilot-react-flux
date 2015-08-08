"use strict";
import $ from "jquery";
import { PRODUCTS } from "../constants/api_routes";
import * as ProductActions from "../actions/product_actions";
import { Promise } from "es6-promise";

function buildFormData(obj, data) {
  return function(data, formData = new FormData()) {
    Object.keys(data).forEach(key => {
      formData.append(`${obj.toLowerCase()}[${key}]`, data[key]);
    })
    return formData;
  }(data)
}

function buildHeaders() {
  return ({
    "Authorization": `Token token=${localStorage.token}`
  })
}

// function buildUrl(obj, id = 0) {
//   return (
//   )
// }

export function create(obj, data) {
  return (
    $.ajax({
      url: PRODUCTS,
      dataType: "json",
      type: "POST",
      headers: buildHeaders(),
      processData: false,
      contentType: false,
      data: buildFormData(obj, data)
    })
  )
}

export function destroy(id) {
  return (
    $.ajax({
      url: `${PRODUCTS}/${id}`,
      dataType: "json",
      type: "DELETE",
      headers: buildHeaders()
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

export function update(obj, data) {
  return (
    $.ajax({
      url: `${PRODUCTS}/${data.id}`,
      dataType: "json",
      type: "PATCH",
      headers: buildHeaders(),
      processData: false,
      contentType: false,
      data: buildFormData(obj, data)
    })
  )
}
