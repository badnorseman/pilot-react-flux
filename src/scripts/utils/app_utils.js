var ProductActions = require("../actions/product_actions");
var ProductConstants = require("../constants/product_constants");
var request = require("superagent");

module.exports = {
  list: function() {
    request.get(API.PRODUCTS)
      .accept("application/json")
      .end(function(error, response){
        if (response) {
          json = JSON.parse(response.text);
          console.log("response: ", json)
          ProductActions.list(json);
        }
        if (error) {
          json = JSON.parse(error.text);
          console.log("Error: ", json)
        }
      });
  }
};
