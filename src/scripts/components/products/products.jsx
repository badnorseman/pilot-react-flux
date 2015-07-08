import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import NewProduct from "./product_new";
import List from "./product_list";

export default class Products extends React.Component {
  constructor() {
    super()
    this.state = {products: []}
    this.onChange = this.onChange.bind(this)
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
          <Link
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
            to="/product/new">
            <i className="material-icons">
              add</i></Link>
        </div>
        <List items={this.state.products}/>
      </div>
    )
  }
}
