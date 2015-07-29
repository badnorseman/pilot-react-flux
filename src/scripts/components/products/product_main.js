import React from "react";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import ProductList from "./product_list";
import NewProduct from "./new_product";
import EditProduct from "./edit_product";
import NewPayment from "../payments/new_payment";

// Replace isBuy, isNew, isSelected with contentType
function _getStateFromStores() {
  return {
    isBuy: false,
    isNew: false,
    isSelected: false,
    product: {},
    products: ProductStore.getAll()
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
    this._setState = this._setState.bind(this)
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

  _getEditProduct() {
    return(
      <EditProduct
        product={this.state.product}
        onBuy={this._handleBuy}
        onClose={this._handleClose}
        onEdit={this._handleEdit}
        onRemove={this._handleRemove}/>
    )
  }

  _getNewPayment() {
    return(
      <NewPayment
        product={this.state.product}
        onClose={this._handleClose}/>
    )
  }

  _getNewProduct() {
    return(
      <NewProduct
        onAdd={this._handleAdd}
        onClose={this._handleClose}/>
    )
  }

  _getProductList() {
    return(
      <ProductList
        products={this.state.products}
        onNew={this._handleNew}
        onSelect={this._handleSelect}/>
    )
  }

  _handleAdd(product) {
    ProductActions.add(product)
    this._setState(false, false, false)
  }

  _handleBuy(id) {
    this.setState({
      isBuy: true,
      isNew: false,
      isSelected: false,
      product: ProductStore.getById(id)
    })
  }

  _handleClose() {
    this._setState(false, false, false)
  }

  _handleEdit(product) {
    ProductActions.edit(product)
    this._setState(false, false, false)
  }

  _handleNew() {
    this._setState(false, true, false)
  }

  _handleRemove(id) {
    ProductActions.remove(id)
    this._setState(false, false, false)
  }

  _handleSelect(id) {
    this.setState({
      isBuy: false,
      isNew: false,
      isSelected: true,
      product: ProductStore.getById(id)
    })
  }

  _onChange() {
    this.setState(_getStateFromStores())
  }

  _setState(isBuy, isNew, isSelected) {
    this.setState({
      isBuy: isBuy,
      isNew: isNew,
      isSelected: isSelected
    })
  }

  // Replace if statement with switch statement and use contentType
  render() {
    let content;
    if (this.state.isBuy && this.state.product) {
      content = this._getNewPayment()
    } else if (this.state.isNew) {
      content = this._getNewProduct()
    } else if (this.state.isSelected && this.state.product) {
      content = this._getEditProduct()
    } else {
      content = this._getProductList()
    }
    return(
      <div>
        {content}
      </div>
    )
  }
}
