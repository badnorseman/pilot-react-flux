// let host = "https://matrix-api.herokuapp.com";
let host = "http://localhost:3000";
let root = "/api";

export default {
  LOGIN: host + root + "/auth/identity/callback",
  LOGOUT: host + root + "/logout",
  OAUTH: host + root + "/auth/",
  PRODUCTS: host + root + "/products",
  SIGNUP: host + root + "/auth/identity/register"
}
