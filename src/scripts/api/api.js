"use strict";
import $ from "jquery";
import { getFormData, getHeaders, getUrl } from "../utils/api_utils";

export function create(obj, data) {
  return (
    $.ajax({
      url: getUrl(obj),
      dataType: "json",
      type: "POST",
      headers: getHeaders(),
      processData: false,
      contentType: false,
      data: getFormData(obj, data)
    })
  )
}

export function destroy(obj, id) {
  return (
    $.ajax({
      url: getUrl(obj, id),
      dataType: "json",
      type: "DELETE",
      headers: getHeaders()
    })
  )
}

export function load(obj) {
  return (
      $.ajax({
      url: getUrl(obj),
      dataType: "json",
      type: "GET",
      headers: getHeaders()
    })
  )
}

export function update(obj, data) {
  return (
    $.ajax({
      url: getUrl(obj, data.id),
      dataType: "json",
      type: "PATCH",
      headers: getHeaders(),
      processData: false,
      contentType: false,
      data: getFormData(obj, data)
    })
  )
}

export function fetchClientToken(obj) {
  return (
    $.ajax({
      url: getUrl(obj, "new"),
      dataType: "json",
      type: "GET",
      headers: getHeaders()
    })
  )
}
