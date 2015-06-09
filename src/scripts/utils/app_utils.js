import ProductActions from "../actions/product_actions";
import API from "../constants/api_routes";
import request from "superagent";

// var ProductActions = require("../actions/product_actions");
// var API = require("../constants/api_routes");
// var request = require("superagent");

module.exports = {

  list: function() {
    request.get(API.Routes.PRODUCTS)
      .accept("application/json")
      .end(function(error, response) {
        console.log("Error: ", error)
        console.log("Response: ", response)

        if (response) {
          return JSON.parse(response.text);
          // json = JSON.parse(response.text);
          // ProductActions.list();
        }
        if (error) {
          // json = JSON.parse(error.text);
        }
      });
  }
};
