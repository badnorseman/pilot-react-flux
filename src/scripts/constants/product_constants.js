var keyMirror = require("react/lib/keyMirror");

module.exports = {

  Urls : {
    PRODUCTS: "http://localhost:3000/api/products"
  },

  ActionTypes: keyMirror({
    ADD: null,
    EDIT: null,
    REMOVE: null
  })
};
