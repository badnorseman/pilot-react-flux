"use strict";
import $ from "jquery";
import { API } from "../constants/api_routes";
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
  if (id === 0) {
    return (
      `${API}/${obj.toLowerCase()}s`
    )
  } else {
    return (
      `${API}/${obj.toLowerCase()}s/${id}`
    )
  }
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

export function destroy(obj, id) {
  return (
    $.ajax({
      url: buildUrl(obj, id),
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
      type: "GET",
      headers: buildHeaders()
    })
  )
}

export function update(obj, data) {
  return (
    $.ajax({
      url: buildUrl(obj, data.id),
      dataType: "json",
      type: "PATCH",
      headers: buildHeaders(),
      processData: false,
      contentType: false,
      data: buildFormData(obj, data)
    })
  )
}

// Update buildUrl() to include 'new'
export function fetchClientToken(obj) {
  return (
    $.ajax({
      url: `${API}/${obj.toLowerCase()}s/new`,
      dataType: "json",
      type: "GET",
      headers: buildHeaders()
    })
  )
}
