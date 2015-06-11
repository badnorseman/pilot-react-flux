import React from "react";

export default class Auth extends React.Component {
  login (email, password, callback) {
    callback = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (callback) callback(true);
      this.onChange(true);
      return;
    }

    pretendRequest(email, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token;
        if (callback) callback(true);
        this.onChange(true);
      } else {
        if (callback) callback(false);
        this.onChange(false);
      }
    });
  }

  getToken() {
    return localStorage.token;
  }

  logout(cb) {
    delete localStorage.token;
    if (callback) callback();
    this.onChange(false);
  }

  loggedIn() {
    return !!localStorage.token;
  }

  onChange() {}
};

function pretendRequest(email, password, callback) {
  setTimeout(() => {
    if (email === "agent.smith@matrix.com" && password === "dammit") {
      callback({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      });
    } else {
      callback({authenticated: false});
    }
  }, 0);
};
