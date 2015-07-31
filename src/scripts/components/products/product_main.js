import React from "react";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import ProductList from "./product_list";
import NewProduct from "./new_product";
import EditProduct from "./edit_product";
import NewPayment from "../payments/new_payment";

function _getStateFromStores() {
  return {
    content: {},
    contentMode: ""
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
    this._onChange = this._onChange.bind(this)
    this._resetStateOfContentMode = this._resetStateOfContentMode.bind(this)
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

  _getEditProduct(product) {
    return (
      <EditProduct
        product={product}
        onBuy={this._handleBuy}
        onClose={this._handleClose}
        onEdit={this._handleEdit}
        onRemove={this._handleRemove}/>
    )
  }

  _getNewPayment(product) {
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

  _getProductList(products) {
    return (
      <ProductList
        products={products}
        onNew={this._handleNew}
        onSelect={this._handleSelect}/>
    )
  }

  _handleAdd(product) {
    ProductActions.add(product)
    this._resetStateOfContentMode()
  }

  _handleBuy(id) {
    this.setState({
      content: this._getNewPayment(ProductStore.getById(id)),
      contentMode: "BUY"
    })
  }

  _handleClose() {
    this._resetStateOfContentMode()
  }

  _handleEdit(product) {
    ProductActions.edit(product)
    this._resetStateOfContentMode()
  }

  _handleNew() {
    this.setState({
      content: this._getNewProduct(),
      contentMode: "NEW"
    })
  }

  _handleRemove(id) {
    ProductActions.remove(id)
    this._resetStateOfContentMode()
  }

  _handleSelect(id) {
    this.setState({
      content: this._getEditProduct(ProductStore.getById(id)),
      contentMode: "EDIT"
    })
  }

  _onChange() {
    this.setState(_getStateFromStores())
  }

  _resetStateOfContentMode() {
    this.setState({
      content: this._getProductList(ProductStore.getAll()),
      contentMode: "LIST"
    })
  }

  render() {
    let content;

    if (this.state.contentMode) {
      content = this.state.content
    } else {
      content = this._getProductList(ProductStore.getAll())
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}
