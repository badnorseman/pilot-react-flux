import ProductActions from "../actions/product_actions";
import ApiRoutes from "../constants/api_routes";
import request from "superagent";

module.exports = {

  list: function() {
    request.get(ApiRoutes.PRODUCTS)
      .set("Content-Type", "application/json")
      .end(function(err, res) {
        if (res.ok) {
          var json = JSON.parse(res.text);
          ProductActions.list_cb(json, null);
        }
        if (res.error) {
          ProductActions.list_cb(null, res.error);
        }
      });
  },

  add: function(record) {
    request.post(ApiRoutes.PRODUCTS)
      .set("Content-Type", "application/json")
      .send(record)
      .end(function(err, res) {
        if (res.ok) {
          var json = JSON.parse(res.text);
          ProductActions.add_cb(json, null);
        }
        if (res.error) {
          ProductActions.add_cb(null, res.error);
        }
      });
  },

  remove: function(id) {
    request.del(ApiRoutes.PRODUCTS + "/" + id)
      .set("Content-Type", "application/json")
      .end(function(err, res) {
        if (res.ok) {
          ProductActions.remove_cb();
        }
        if (res.error) {
          ProductActions.remove_cb(res.error);
        }
      });
  }
};
