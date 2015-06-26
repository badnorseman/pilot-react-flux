import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import NewProduct from "./product_new";
import List from "./product_list";

export class Products extends React.Component {
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

  addButtonStyle() {
    return {
      bottom: 25,
      right: 25
    }
  }

  render() {
    return(
      <div>
        <div className="fixed-action-btn" style={this.addButtonStyle()}>
          <Link to="NewProduct" className="btn-floating btn-large red waves-effect waves-light">
            <i className="mdi-content-add"></i>
          </Link>
        </div>
        <List items={this.state.products}/>
      </div>
    )
  }
};
