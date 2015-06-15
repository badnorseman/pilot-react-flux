import React from "react";
import Mui from "material-ui";
import AddItem from "./product_add";
import List from "./product_list";
import Login from "../authentication/login";
import Logout from "../authentication/logout";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";

let ThemeManager = new Mui.Styles.ThemeManager();

var Products = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState() {
    return {
      products: ProductStore.getProducts()
    };
  },

  componentWillMount() {
    ProductActions.load();
  },

  componentDidMount() {
    ProductStore.addChangeListener(this.onChange);
  },

  componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange);
  },

  onChange() {
    if (!this.isMounted())
      return;

    this.setState({
      products: ProductStore.getProducts()
    });
  },

  render() {
    return(
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

module.exports = Products;
