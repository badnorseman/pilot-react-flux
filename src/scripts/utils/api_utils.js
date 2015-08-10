"use strict";
import { API } from "../constants/api_routes";

export function getFormData(objName, data) {
  let formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(`${objName.toLowerCase()}[${key}]`, data[key]);
  })
  return formData;
}

export function getHeaders() {
  return ({
    "Authorization": `Token token=${localStorage.token}`
  })
}

export function getUrl(objName, params) {
  return `${API}/${objName.toLowerCase()}s${getParams(params)}`;
}

function getParams(params = "") {
  return (params === "") ? "" : `/${params}`;
}
