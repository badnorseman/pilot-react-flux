var React = require("react");
var ProductStore = require("../../stores/product_store");
var ProductActions = require("../../actions/product_actions");
var Login = require("../authentication/login");
var Logout = require("../authentication/logout");
var List = require("./product_list");
var AddItem = require("./product_add");

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
    ProductActions.load();
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
        <Login />
        <Logout />
        <div>
          <div>
            {this.state.errors}
          </div>
          <List items={this.state.products} />
          <AddItem />
        </div>
      </div>
    );
  }
});
