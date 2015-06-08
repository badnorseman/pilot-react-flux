var ProductActions = require("../actions/product_actions");
var ProductConstants = require("../constants/product_constants");
var request = require("superagent");

console.log("AppUtils");

module.exports = {

  list: function() {
    console.log("AppUtils list");
    request.get(ProductConstants.API.PRODUCTS)
      .accept("application/json")
      .end(function(error, response){
        if (response) {
          json = JSON.parse(response.text);
          console.log("Response: ", json)
          ProductActions.list();
        }
        if (error) {
          json = JSON.parse(error.text);
          console.log("Error: ", json)
        }
      });
  }
};
