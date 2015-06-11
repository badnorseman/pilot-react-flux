var React = require("react");
var ProductActions = require("../../actions/product_actions");

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.item.name}
        {this.props.item.description}
        <RemoveItem id={this.props.item.id} />
      </div>
    )
  }
});

var RemoveItem = React.createClass({
  handleClick: function() {
    var id = this.props.id;
    ProductActions.remove(id);
  },
  render: function() {
    return (
      <button onClick={this.handleClick}>Remove </button>
    )
  }
});
