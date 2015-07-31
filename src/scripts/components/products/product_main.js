import React from "react";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import ProductList from "./product_list";
import NewProduct from "./new_product";
import EditProduct from "./edit_product";
import NewPayment from "../payments/new_payment";

function _getStateFromStores() {
  return {
    content: {}
  }
}

export default class ProductMain extends React.Component {
  constructor() {
    super()
    this.state = _getStateFromStores()
    this._handleAdd = this._handleAdd.bind(this)
    this._handleBuy = this._handleBuy.bind(this)
    this._handleClose = this._handleClose.bind(this)
    this._handleEdit = this._handleEdit.bind(this)
    this._handleNew = this._handleNew.bind(this)
    this._handleRemove = this._handleRemove.bind(this)
    this._handleSelect = this._handleSelect.bind(this)
    this._isEmpty = this._isEmpty.bind(this)
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

  componentDidUpdate() {
    componentHandler.upgradeDom()
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

  _getNewPayment(id) {
    let product = ProductStore.getById(id);
    return (
      <NewPayment
        product={product}
        onClose={this._handleClose}/>
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

  _handleAdd(product) {
    ProductActions.add(product)
    this.setState(_getStateFromStores())
  }

  _handleBuy(id) {
    this.setState({ content: this._getNewPayment(id) })
  }

  _handleClose() {
    this.setState(_getStateFromStores())
  }

  _handleEdit(product) {
    ProductActions.edit(product)
    this.setState(_getStateFromStores())
  }

  _handleNew() {
    this.setState({ content: this._getNewProduct() })
  }

  _handleRemove(id) {
    ProductActions.remove(id)
    this.setState(_getStateFromStores())
  }

  _handleSelect(id) {
    this.setState({ content: this._getEditProduct(id) })
  }

  _isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
  }

  _onChange() {
    this.setState(_getStateFromStores())
  }

  render() {
    let content;

    if (this._isEmpty(this.state.content)) {
      content = this._getProductList()
    } else {
      content = this.state.content
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}
