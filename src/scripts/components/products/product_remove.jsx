import React from "react";
import ProductActions from "../../actions/product_actions";

module.exports = React.createClass({
  handleClick: function() {
    var id = this.props.id;
    ProductActions.remove(id);
  },
  render: function() {
    return (
      <button onClick={this.handleClick}>Remove</button>
    )
  }
});
