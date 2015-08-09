"use strict";
import $ from "jquery";
import { LOGIN, LOGOUT, OAUTH, SIGNUP } from "../constants/api_routes";

export function login(data) {
  return (
    $.ajax({
      url: LOGIN,
      dataType: "json",
      type: "GET",
      data: data
    })
  )
}

export function logout() {
  return (
    $.ajax({
      url: LOGOUT,
      dataType: "json",
      type: "GET"
    })
  )
}

export function oauth(provider) {
  return (
    $.ajax({
      url: `${OAUTH}/${provider}`,
      dataType: "json",
      type: "GET"
    })
  )
}

export function signup(data) {
  return (
    $.ajax({
      url: SIGNUP,
      dataType: "json",
      type: "POST",
      data: data
    })
  )
}
