import React from "react";
import Mui from "material-ui";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import NewProduct from "./product_new";
import Grid from "./product_grid";
import List from "./product_list";

let ThemeManager = new Mui.Styles.ThemeManager()

class Products extends React.Component {
  constructor() {
    super()
    this.state = {products: []}
    this.onChange = this.onChange.bind(this)
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
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
        <NewProduct />
        <List items={this.state.products} />
        <Grid />
      </div>
    )
  }
}

Products.childContextTypes = {
  muiTheme: React.PropTypes.object
}

module.exports = Products;
