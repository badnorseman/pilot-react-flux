import React from "react";
import Mui from "material-ui";
import AddProduct from "./product_add";
import Grid from "./product_grid";
import List from "./product_list";
import Login from "../authentication/login";
import Logout from "../authentication/logout";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";

let ThemeManager = new Mui.Styles.ThemeManager();

class Products extends React.Component {
  constructor() {
    super()
    this.state = {products: []}
    this.onChange = this.onChange.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ProductActions.load()
  }

  componentDidMount() {
    ProductStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      products: this.state.products = ProductStore.getProducts()
    })
  }

  render() {
    return(
      <div>
        <div>
          <Login />
          <Logout />
        </div>
        <div>
          <List items={this.state.products} />
          <Grid items={this.state.products} />
          <AddProduct />
        </div>
      </div>
    );
  }
}

Products.childContextTypes = {
  muiTheme: React.PropTypes.object
}

module.exports = Products;
