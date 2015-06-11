var React = require("react");
var Item = require("./product_item");

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.items.map(function(item, index) {
          return <Item item={item} key={index} />
        })}
      </div>
    );
  }
});
