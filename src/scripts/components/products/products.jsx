import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import AddProduct from "./product_add";
import List from "./product_list";
import Test from "../test";

export default class Products extends React.Component {
  constructor() {
    super()
    this.state = {products: []}
    this.onChange = this.onChange.bind(this)
    this.handleTestClick = this.handleTestClick.bind(this)
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

  handleTestClick() {
    alert("Test was clicked!")
  }

  render() {
    return(
      <div>
        <Test
          id="products"
          type="text"
          onClick={this.handleTestClick}/>
        <List items={this.state.products}/>
        <AddProduct/>
      </div>
    )
  }
}
