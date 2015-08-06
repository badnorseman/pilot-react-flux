"use strict";
import $ from "jquery";
import { Promise } from "es6-promise";
import ApiRoutes from "../constants/api_routes";
import * as ProductActions from "../actions/product_actions";

function buildFormData(data) {
  return function(data, formData = new FormData()) {
    Object.keys(data).forEach(key => {
      formData.append(`product[${key}]`, data[key]);
    })
    return formData;
  }(data)
}

export default {
  create(data) {
    Promise.resolve(
      $.ajax({
        url: ApiRoutes.PRODUCTS,
        dataType: "json",
        type: "POST",
        headers: {
          "Authorization": "Token token=" + localStorage.token
        },
        processData: false,
        contentType: false,
        data: buildFormData(data)
      })
    ).then(success => {
        ProductActions.list()
      }).catch(failure => {
        let errors = JSON.parse(failure.responseText).errors;
        ProductActions.receiveProductErrorsFromServer(errors)
      })
  },

  delete(id) {
    Promise.resolve(
      $.ajax({
        url: ApiRoutes.PRODUCTS + "/" + id,
        dataType: "json",
        type: "DELETE",
        headers: {
          "Authorization": "Token token=" + localStorage.token
        }
      })
    ).then(success => {
        ProductActions.list()
      }).catch(failure => {
        let errors = JSON.parse(failure.responseText).errors;
        ProductActions.receiveProductErrorsFromServer(errors)
      })
  },

  load() {
    Promise.resolve(
      $.ajax({
        url: ApiRoutes.PRODUCTS,
        dataType: "json",
        type: "GET"
      })
    ).then(success => {
        ProductActions.receiveProductDataFromServer(success)
      }).catch(failure => {
        let errors = JSON.parse(failure.responseText).errors;
        ProductActions.receiveProductErrorsFromServer(errors)
      })
  },

  update(data) {
    Promise.resolve(
      $.ajax({
        url: ApiRoutes.PRODUCTS + "/" + data.id,
        dataType: "json",
        type: "PATCH",
        headers: {
          "Authorization": "Token token=" + localStorage.token
        },
        processData: false,
        contentType: false,
        data: buildFormData(data)
      })
    ).then(success => {
        ProductActions.list()
      }).catch(failure => {
        let errors = JSON.parse(failure.responseText).errors;
        ProductActions.receiveProductErrorsFromServer(errors)
      })
  }
}
