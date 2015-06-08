var keyMirror = require("react/lib/keyMirror");

module.exports = {

  API : {
    PRODUCTS: "http://localhost:3000/api/products"
  },

  ActionTypes: keyMirror({
    ADD: null,
    EDIT: null,
    REMOVE: null
  })
};
