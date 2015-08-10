"use strict";
import { API } from "../constants/api_routes";

export function getFormData(entityName, data) {
  let formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(`${entityName.toLowerCase()}[${key}]`, data[key]);
  })
  return formData;
}

export function getHeaders() {
  return ({
    "Authorization": `Token token=${localStorage.token}`
  })
}

export function getUrl(entityName, params) {
  return `${API}/${entityName.toLowerCase()}s${getParams(params)}`;
}

function getParams(params = "") {
  return (params === "") ? "" : `/${params}`;
}
