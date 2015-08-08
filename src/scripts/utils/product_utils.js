"use strict";
import $ from "jquery";
import { API, PRODUCTS } from "../constants/api_routes";
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

function buildUrl(obj, id = 0) {
  return (
    `${API}/${obj.toLowerCase()}s`
  )
}

export function create(obj, data) {
  return (
    $.ajax({
      url: buildUrl(obj),
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

export function load(obj) {
  return (
      $.ajax({
      url: buildUrl(obj),
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
