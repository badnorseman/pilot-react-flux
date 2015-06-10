import ProductActions from "../actions/product_actions";
import ApiRoutes from "../constants/api_routes";
import request from "superagent";

module.exports = {

  list: function() {
    request.get(ApiRoutes.PRODUCTS)
      .set("Content-Type", "application/json")
      .end(function(err, res) {
        var json = JSON.parse(res.text);

        if (res.ok) {
          ProductActions.list_cb(json);
        }
        if (res.error) {
        }
      });
  },

  add: function(record) {
    request.post(ApiRoutes.PRODUCTS)
      .set("Content-Type", "application/json")
      .send(record)
      .end(function(err, res) {
        var json = JSON.parse(res.text);

        if (res.ok) {
          ProductActions.add_cb(json);
        }
        if (res.error) {
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
        console.log("res: ", res.body.message);
        console.log("res: ", res.status);
        console.log("res: ", res.type);
        if (res.error) {
        }
      });
  }
};
