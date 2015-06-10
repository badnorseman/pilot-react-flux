import ProductActions from "../actions/product_actions";
import Api from "../constants/api_routes";
import request from "superagent";

module.exports = {

  list1: function() {
    request.get(Api.Routes.PRODUCTS)
      .accept("application/json")
      .end(function(error, response) {
        if (response) {
          var json = JSON.parse(response.text);
          ProductActions.list2(json);
        }
        if (error) {
          var json = JSON.parse(error.text);
        }
      });
  },

  add1: function(record) {
    console.log("add1: ", record);
    request.post(Api.Routes.PRODUCTS)
      .accept("application/json")
      .end(function(error, response) {
        if (response) {
          var json = JSON.parse(response.text);
          ProductActions.add2(json);
        }
        if (error) {
          var json = JSON.parse(error.text);
        }
      });
  },

  remove1: function(id) {
    console.log("remove1: ", id);
    request.post(Api.Routes.PRODUCTS)
      .accept("application/json")
      .end(function(error, response) {
        if (response) {
          var json = JSON.parse(response.text);
          ProductActions.remove2(json);
        }
        if (error) {
          var json = JSON.parse(error.text);
        }
      });
  }
};
