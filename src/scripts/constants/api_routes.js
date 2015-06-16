var host = "https://matrix-api.herokuapp.com"
// var host = "http://localhost:3000";
var root = "/api"

export default {
  LOGIN: host + root + "/auth/identity/callback",
  LOGOUT: host + root + "/logout",
  PRODUCTS: host + root + "/products"
}
