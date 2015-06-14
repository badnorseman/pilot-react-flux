import React from "react";
import ProductStore from "../../stores/product_store";
import ProductActions from "../../actions/product_actions";
import Login from "../authentication/login";
import Logout from "../authentication/logout";
import List from "./product_list";
import AddItem from "./product_add";
import Mui from "material-ui";

let ThemeManager = new Mui.Styles.ThemeManager();

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
    return {
      products: ProductStore.getProducts()
    };
  },

  componentWillMount: function() {
    ProductActions.load();    
  },

  componentDidMount: function() {
    ProductStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this.onChange);
  },

  onChange: function() {
    if (!this.isMounted())
      return;

    this.setState({
      products: ProductStore.getProducts()
    });
  },

  render: function() {
    return (
      <div>
        <div>
          <Login />
          <Logout />
        </div>
        <div>
          <List items={this.state.products} />
          <AddItem />
        </div>
      </div>
    );
  }
});
