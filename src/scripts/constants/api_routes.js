const host = "https://matrix-api.herokuapp.com"
// const host = "http://localhost:3000";
const root = "/api"

export default {
  LOGIN: host + root + "/auth/identity/callback",
  LOGOUT: host + root + "/logout",
  PRODUCTS: host + root + "/products"
}
