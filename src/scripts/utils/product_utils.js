"use strict";
import $ from "jquery";
import { Promise } from "es6-promise";
import ApiRoutes from "../constants/api_routes";
import ProductActions from "../actions/product_actions";
import { convertXhrToArray } from "./xhr_converter";

function buildFormData(data) {
  let fd = new FormData();
  fd.append("product[currency]", data.currency);
  fd.append("product[description]", data.description);
  fd.append("product[image]", data.image);
  fd.append("product[name]", data.name);
  fd.append("product[price]", data.price);
  return fd;
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
      })).then(function(response) {
        ProductActions.list()
      }).catch(function(response) {
        let errors = convertXhrToArray(response);
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
      success: function(data) {
        ProductActions.list()
      }.bind(this),
      error: function(xhr) {
        let errors = convertXhrToArray(xhr);
        ProductActions.receiveProductErrorsFromServer(errors)
      }.bind(this)
    })
  },

  load() {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      dataType: "json",
      type: "GET",
      success: function(data) {
        ProductActions.receiveProductDataFromServer(data)
      }.bind(this),
      error: function(xhr) {
        let errors = convertXhrToArray(xhr);
        ProductActions.receiveProductErrorsFromServer(errors)
      }.bind(this)
    })
  },

  update(data) {
    $.ajax({
      url: ApiRoutes.PRODUCTS + "/" + data.id,
      dataType: "json",
      type: "PATCH",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      processData: false,
      contentType: false,
      data: function() {
        let fd = new FormData();
        fd.append("product[currency]", data.currency);
        fd.append("product[description]", data.description);
        fd.append("product[image]", data.image);
        fd.append("product[name]", data.name);
        fd.append("product[price]", data.price);
        return fd;
      }(),
      success: function(data) {
        ProductActions.list()
      }.bind(this),
      error: function(xhr) {
        let errors = convertXhrToArray(xhr);
        ProductActions.receiveProductErrorsFromServer(errors)
      }.bind(this)
    })
  }
}
