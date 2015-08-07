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

export function create(data) {
  Promise.resolve(
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
  ).then(success => {
      ProductActions.list();
    }).catch(failure => {
      let errors = JSON.parse(failure.responseText).errors;
      ProductActions.receiveProductErrors(errors);
    })
}

export function destroy(id) {
  Promise.resolve(
    $.ajax({
      url: `${PRODUCTS}/${id}`,
      dataType: "json",
      type: "DELETE",
      headers: {
        "Authorization": `Token token=${localStorage.token}`
      }
    })
  ).then(success => {
      ProductActions.list();
    }).catch(failure => {
      let errors = JSON.parse(failure.responseText).errors;
      ProductActions.receiveProductErrors(errors);
    })
}

export function list() {
  Promise.resolve(
    $.ajax({
      url: PRODUCTS,
      dataType: "json",
      type: "GET"
    })
  ).then(success => {
      ProductActions.receiveProductData(success);
    }).catch(failure => {
      let errors = JSON.parse(failure.responseText).errors;
      ProductActions.receiveProductErrors(errors);
    })
}

export function update(data) {
  Promise.resolve(
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
  ).then(success => {
      ProductActions.list();
    }).catch(failure => {
      let errors = JSON.parse(failure.responseText).errors;
      ProductActions.receiveProductErrors(errors);
    })
}
