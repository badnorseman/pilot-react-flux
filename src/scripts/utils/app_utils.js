import ProductActions from "../actions/product_actions";
import API from "../constants/api_routes";
import request from "superagent";

module.exports = {

  get: function() {
    request.get(API.Routes.PRODUCTS)
      .accept("application/json")
      .end(function(error, response) {
        console.log("Error: ", error)
        console.log("Response: ", response)

        if (response) {
          // var json = JSON.parse(response.text);
          // ProductActions.list(json);
        }
        if (error) {
          // var json = JSON.parse(error.text);
        }
      });
  }
};
