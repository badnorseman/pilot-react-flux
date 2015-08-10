"use strict";
import React, { Component, PropTypes } from "react";
import * as ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import ProductList from "./product_list";
import BuyProduct from "../transactions/new_transaction";
import EditProduct from "./edit_product";
import NewProduct from "./new_product";

export default class ProductMain extends Component {
  constructor(context) {
    super(context);
    this.state = { content: "", errors: [] };
    this._handleAdd = this._handleAdd.bind(this);
    this._handleBuy = this._handleBuy.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleNew = this._handleNew.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    ProductActions.load()
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange)
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  _getBuyProduct(id) {
    let product = ProductStore.getById(id);

    return (
      <BuyProduct
        product={product}
        onClose={this._handleClose}/>
    )
  }

  _getEditProduct(id) {
    let product = ProductStore.getById(id);

    return (
      <EditProduct
        product={product}
        onBuy={this._handleBuy}
        onClose={this._handleClose}
        onEdit={this._handleEdit}
        onRemove={this._handleRemove}/>
    )
  }

  _getNewProduct() {
    return (
      <NewProduct
        onAdd={this._handleAdd}
        onClose={this._handleClose}/>
    )
  }

  _getProductList() {
    let products = ProductStore.getAll();

    return (
      <ProductList
        products={products}
        onNew={this._handleNew}
        onSelect={this._handleSelect}/>
    )
  }

  _getState() {
    return {
      content: this._getProductList(),
      errors: ProductStore.getErrors()
    }
  }

  _handleAdd(product) {
    ProductActions.create(product)
    this.setState(this._getState())
  }

  _handleBuy(id) {
    this.setState({ content: this._getBuyProduct(id) })
  }

  _handleClose() {
    this.setState(this._getState())
  }

  _handleEdit(product) {
    ProductActions.update(product)
    this.setState(this._getState())
  }

  _handleNew() {
    this.setState({ content: this._getNewProduct() })
  }

  _handleRemove(id) {
    ProductActions.destroy(id)
    this.setState(this._getState())
  }

  _handleSelect(id) {
    this.setState({ content: this._getEditProduct(id) })
  }

  _onChange() {
    this.setState(this._getState())
  }

  render() {
    return (
      <div>
        {this.state.content}
      </div>
    )
  }
}

ProductMain.contextTypes = {
  router: PropTypes.func.isRequired
}
