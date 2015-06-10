import ProductActions from "../actions/product_actions";
import ApiRoutes from "../constants/api_routes";
import request from "superagent";

module.exports = {

  list: function() {
    request.get(ApiRoutes.PRODUCTS)
      .accept("application/json")
      .end(function(error, response) {
        if (response) {
          var json = JSON.parse(response.text);
          ProductActions.list_cb(json);
        }
        if (error) {
          var json = JSON.parse(error.text);
        }
      });
  },

  add: function(record) {
    request.post(ApiRoutes.PRODUCTS)
      .accept("application/json")
      .send(record)
      .end(function(error, response) {
        if (response) {
          var json = JSON.parse(response.text);
          ProductActions.add_cb(json);
        }
        if (error) {
          var json = JSON.parse(error.text);
        }
      });
  },

  remove: function(id) {
    request.del(ApiRoutes.PRODUCTS + "/" + id)
      .accept("application/json")
      .end(function(error, response) {
        if (response) {
          var json = JSON.parse(response.text);
          ProductActions.remove_cb(json);
        }
        // console.log("error: ", error);
        // if (error) {
        //   var json = JSON.parse(error.text);
        // }
      });
  }
};
