import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import AddProduct from "./product_add";
import Item from "./product_list_item";

export default class ProductList extends React.Component {
  constructor() {
    super()
    this.state = {products: []}
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount() {
    ProductActions.list()
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
    let items = this.state.products.map(item => (
      <Item item={item} key={item.id}/>
    ))

    return(
      <div>
        <div className="mdl-grid">
          {items}
        </div>
        <AddProduct/>
      </div>
    )
  }
}
