// Added component life-cycle event to better understand dataflow.
// Change is to find best solution to control change of content
// when component updates successfully or with errors.
// Perehaps a boolean is required on Store e.g. isRequestSuccessfull.
// I would like to differetiate between viewState and storeState.
// viewState is contentSelector and id (for seleted item).
// storeState is errors array and items array e.g. products.
// ToDo:
// I need to pass errors to children in order to display the errors as props.

"use strict";
import React, { Component, PropTypes } from "react";
import * as ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import ProductList from "./product_list";
import BuyProduct from "../transactions/new_transaction";
import EditProduct from "./edit_product";
import NewProduct from "./new_product";

let prevContent;

export default class ProductMain extends Component {
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
    ProductActions.load()
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange)
  }

  componentDidUpdate(prevProps, nextProps) {
    console.log("componentDidUpdate", this.state, nextProps)
    componentHandler.upgradeDom()
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange)
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", this.state, nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState)
    return nextState.errors.length === 0;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", this.state, nextState)
  }

  _getBuyProduct() {
    let product = this.state.products[this.state.id];
    return (
      <BuyProduct
        product={product}
        onClose={this._handleClose}/>
    )
  }

  _getContent() {
    switch (this.state.contentSelector) {
      case "BUY":
        return this._getBuyProduct()
        break;
      case "EDIT":
        return this._getEditProduct()
        break;
      case "NEW":
        return this._getNewProduct()
        break;
      default:
        return this._getProductList()
    }
  }

  _getEditProduct() {
    let product = this.state.products[this.state.id];
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
    let products = this.state.products;
    return (
      <ProductList
        products={products}
        onNew={this._handleNew}
        onSelect={this._handleSelect}/>
    )
  }

  _getStateFromStores() {
    return {
      contentSelector: "",
      errors: ProductStore.getErrors(),
      id: 0,
      products: ProductStore.getAll()
    }
  }

  _handleAdd(product) {
    ProductActions.create(product)
    this.setState(this._getStateFromStores())
  }

  _handleBuy(id) {
    this.setState({
      contentSelector: "BUY",
      id: id
    })
  }

  _handleClose() {
    this.setState(this._getStateFromStores())
  }

  _handleEdit(product) {
    ProductActions.update(product)
    this.setState(this._getStateFromStores())
    console.log("_handleEdit", product, this.state)
  }

  _handleNew() {
    this.setState({
      contentSelector: "NEW"
    })
  }

  _handleRemove(id) {
    ProductActions.destroy(id)
    this.setState(this._getStateFromStores())
  }

  _handleSelect(id) {
    this.setState({
      contentSelector: "EDIT",
      id: id
    })
    console.log("_handleSelect", this.state)
  }

  _onChange() {
    this.setState(this._getStateFromStores())
    console.log("_onChange", this.state)
  }

  render() {
    let content = this._getContent();
    console.log("render", content, this.state)
    return (
      <div>
        {content}
      </div>
    )
  }
}

ProductMain.contextTypes = {
  router: PropTypes.func.isRequired
}
