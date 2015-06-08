var React = require("react");
var ProductStore = require("../stores/product_store");
var Sidebar = require("./sidebar");

function getStateFromStores() {
  return {
    products: ProductStore.getProducts()
  };
}

module.exports = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    ProductStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState(getStateFromStores());
  },

  render: function() {
    return (
      <div>
        <Sidebar />
        <p>{this.state.products}</p>
      </div>
    );
  }
});
