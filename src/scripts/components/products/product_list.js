import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import ProductListItem from "./product_list_item";

export default class ProductList extends React.Component {
  constructor() {
    super()
    this.state = {products: []}
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    ProductActions.list()
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({
      products: this.state.products = ProductStore.getProducts()
    })
  }

  render() {
    let items = this.state.products.map(item => (
      <Link to={`/products/${item.id}`} params={{id: item.id}}>
        <ProductListItem item={item} key={item.id}/>
      </Link>
    ))

    return(
      <div>
        <div className="mdl-grid">
          {items}
        </div>
        <Link to="/product/new">
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-button--floating-action">
            <i className="material-icons">add</i>
          </button>
        </Link>
      </div>
    )
  }
}
