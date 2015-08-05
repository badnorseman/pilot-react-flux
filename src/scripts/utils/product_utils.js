"use strict";
import $ from "jquery";
import { Promise } from "es6-promise";
import ApiRoutes from "../constants/api_routes";
import ProductActions from "../actions/product_actions";

function buildFormData(data) {
  return function(data, form) {
    Object.keys(data).forEach(key => {
      form.append(`product[${key}]`, data[key]);
    })
    return form;
  }(data, new FormData())
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
    })).then(function(success) {
        ProductActions.list()
      }).catch(function(failure) {
        let errors = JSON.parse(failure.responseText).errors;
        ProductActions.receiveProductErrorsFromServer(errors)
      })
  },

  delete(id) {
    $.ajax({
      url: ApiRoutes.PRODUCTS + "/" + id,
      dataType: "json",
      type: "DELETE",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      success: function(success) {
        ProductActions.list()
      }.bind(this),
      error: function(failure) {
        let errors = JSON.parse(failure.responseText).errors;
        ProductActions.receiveProductErrorsFromServer(errors)
      }.bind(this)
    })
  },

  load() {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      dataType: "json",
      type: "GET",
      success: function(success) {
        ProductActions.receiveProductDataFromServer(success)
      }.bind(this),
      error: function(failure) {
        let errors = JSON.parse(failure.responseText).errors;
        ProductActions.receiveProductErrorsFromServer(errors)
      }.bind(this)
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
    })).then(function(success) {
        ProductActions.list()
      }).catch(function(failure) {
        let errors = JSON.parse(failure.responseText).errors;
        ProductActions.receiveProductErrorsFromServer(errors)
      })
  }
}
