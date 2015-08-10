"use strict";
import $ from "jquery";
import { LOGIN, LOGOUT, OAUTH, SIGNUP } from "../constants/api_routes";
import { Promise } from "es6-promise";

export function login(data) {
  return (
    Promise.resolve(
      $.ajax({
        url: LOGIN,
        dataType: "json",
        type: "GET",
        data: data
      })
    )
  )
}

export function logout() {
  return (
    Promise.resolve(
      $.ajax({
        url: LOGOUT,
        dataType: "json",
        type: "GET"
      })
    )
  )
}

export function oauth(provider) {
  return (
    Promise.resolve(
      $.ajax({
        url: `${OAUTH}/${provider}`,
        dataType: "json",
        type: "GET"
      })
    )
  )
}

export function signup(data) {
  return (
    Promise.resolve(
      $.ajax({
        url: SIGNUP,
        dataType: "json",
        type: "POST",
        data: data
      })
    )
  )
}
