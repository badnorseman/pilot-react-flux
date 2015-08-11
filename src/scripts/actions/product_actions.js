import ActionTypes from "../constants/action_types";
import * as Api from "../api/api";
import { dispatch } from "../dispatcher/dispatcher";
import { Schema, arrayOf, normalize } from "normalizr";

const ENTITY_NAME = "product";
const product = new Schema("products", { idAttribute: "id" });

export function create(data) {
  dispatch({
    type: ActionTypes.PRODUCT_CREATE_REQUEST
  });
  Api.create(ENTITY_NAME, data).then(() => {
    return Api.load(ENTITY_NAME);
  }).then(response => {
    dispatch({
      type: ActionTypes.PRODUCT_CREATE_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.PRODUCT_CREATE_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function destroy(id) {
  dispatch({
    type: ActionTypes.PRODUCT_DESTROY_REQUEST,
    id: id
  });
  Api.destroy(ENTITY_NAME, id).then(() => {
    return Api.load(ENTITY_NAME);
  }).then(response => {
    dispatch({
      type: ActionTypes.PRODUCT_DESTROY_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.PRODUCT_DESTROY_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function load() {
  dispatch({
    type: ActionTypes.PRODUCT_LOAD_REQUEST
  });
  Api.load(ENTITY_NAME).then(response => {
    console.log(response);
    let normalized = normalize(response, {
      products: arrayOf(product)
    });
    console.log(normalized);
    dispatch({
      type: ActionTypes.PRODUCT_LOAD_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.PRODUCT_LOAD_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function update(data) {
  dispatch({
    type: ActionTypes.PRODUCT_UPDATE_REQUEST
  });
  Api.update(ENTITY_NAME, data).then(() => {
    return Api.load(ENTITY_NAME);
  }).then(response => {
    dispatch({
      type: ActionTypes.PRODUCT_UPDATE_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.PRODUCT_UPDATE_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}
