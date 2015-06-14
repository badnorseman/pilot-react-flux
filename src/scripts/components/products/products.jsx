import React from "react";
import ProductStore from "../../stores/product_store";
import ProductActions from "../../actions/product_actions";
import Login from "../authentication/login";
import Logout from "../authentication/logout";
import List from "./product_list";
import AddItem from "./product_add";
import Mui from "material-ui";

let ThemeManager = new Mui.Styles.ThemeManager();

function getProductState() {
  return {
    products: ProductStore.getProducts(),
    errors: ProductStore.getErrors()
  };
}

module.exports = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

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
