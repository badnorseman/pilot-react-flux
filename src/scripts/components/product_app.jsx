var React = require("react");
var ProductStore = require("../stores/product_store");
var ProductActions = require("../actions/product_actions");
var Sidebar = require("./sidebar");

function getProductState() {
  return {
    products: ProductStore.getProducts(),
    errors: ProductStore.getErrors()
  };
}

module.exports = React.createClass({

  getInitialState: function() {
    return getProductState();
  },

  componentDidMount: function() {
    ProductStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState(getProductState);
  },

  render: function() {
    return (
      <div>
        <Sidebar />
        <p>{this.state.errors}</p>
        <p>{this.state.products}</p>
        <button onClick={this.OnListClick}>List </button>
        <button onClick={this.OnAddClick}>Add </button>
      </div>
    );
  },

  OnListClick: function() {
    ProductActions.list();
  },

  OnAddClick: function() {
    var text = "";
    ProductActions.add(text);
  }
});
