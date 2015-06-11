var React = require("react");
var RemoveItem = require("./product_remove");

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
