var React = require("react");
var ProductStore = require("../stores/product_store");
var ProductActions = require("../actions/product_actions");
var Sidebar = require("./sidebar");

module.exports = React.createClass({

  getInitialState: function() {
    return {
      products: ProductStore.getProducts(),
      errors: []
    };
  },

  componentDidMount: function() {
    ProductStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState({
      products: ProductStore.getProducts(),
      errors: ProductStore.getErrors()
    });
  },

  render: function() {
    return (
      <div>
        <Sidebar />
        <p>{this.state.errors}</p>
        <p>{this.state.products}</p>
        <button onClick={this.OnListClick} />
      </div>
    );
  },

  OnListClick: function() {
    ProductActions.list();
  }
});
