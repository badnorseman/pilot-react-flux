// ToDo:
// I need to pass errors to children in order to display the errors as props.
// Develop element to display errors.

"use strict";
import React, { Component, PropTypes } from "react";
import { createProduct, destroyProduct, getProducts, updateProduct } from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import ProductList from "./product_list";
import BuyProduct from "../transactions/new_transaction";
import EditProduct from "./edit_product";
import NewProduct from "./new_product";

export default class ProductMain extends Component {
  static contextTypes = {
    router: PropTypes.func.isRequired
  }

  constructor(context) {
    super(context);
    this.state = {
      contentSelector: "",
      id: 0,
      errors: [],
      products: {}
    };
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
    getProducts()
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange)
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange)
  }

  _getBuyProduct() {
    let product = this.state.products[this.state.id];
    return (
      <BuyProduct
        product={product}
        onClose={this._handleClose}/>
    );
  }

  _getEditProduct() {
    let errors = this.state.errors;
    let product = this.state.products[this.state.id];
    return (
      <EditProduct
        errors={errors}
        product={product}
        onBuy={this._handleBuy}
        onClose={this._handleClose}
        onEdit={this._handleEdit}
        onRemove={this._handleRemove}/>
    );
  }

  _getNewProduct() {
    let errors = this.state.errors;
    return (
      <NewProduct
        errors={errors}
        onAdd={this._handleAdd}
        onClose={this._handleClose}/>
    );
  }

  _getProductList() {
    let products = this.state.products;
    return (
      <ProductList
        products={products}
        onNew={this._handleNew}
        onSelect={this._handleSelect}/>
    );
  }

  _getStateFromStores() {
    return {
      errors: ProductStore.getErrors(),
      products: ProductStore.getAll()
    }
  }

  _handleAdd(product) {
    createProduct(product)
    this.setState(this._initializeView())
  }

  _handleBuy(id) {
    this.setState({
      contentSelector: "BUY",
      id: id
    })
  }

  _handleClose() {
    this.setState(this._initializeView())
  }

  _handleEdit(product) {
    updateProduct(product)
    this.setState(this._initializeView())
  }

  _handleNew() {
    this.setState({
      contentSelector: "NEW"
    })
  }

  _handleRemove(id) {
    destroyProduct(id)
    this.setState(this._initializeView())
  }

  _handleSelect(id) {
    this.setState({
      contentSelector: "EDIT",
      id: id
    })
  }

  _initializeView() {
    return {
      contentSelector: "",
      id: 0
    }
  }

  _onChange() {
    this.setState(this._getStateFromStores())
  }

  render() {
    let content;
    switch (this.state.contentSelector) {
      case "BUY": content = this._getBuyProduct(); break;
      case "EDIT": content = this._getEditProduct(); break;
      case "NEW": content = this._getNewProduct(); break;
      default: content = this._getProductList();
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}
