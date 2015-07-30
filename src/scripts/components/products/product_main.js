import React from "react";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import ProductList from "./product_list";
import NewProduct from "./new_product";
import EditProduct from "./edit_product";
import NewPayment from "../payments/new_payment";

function _getStateFromStores() {
  return {
    contentMode: "",
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
    this._resetStateOfContentMode()
  }

  _handleBuy(id) {
    this.setState({
      contentMode: "BUY",
      product: ProductStore.getById(id)
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
    this.setState({ contentMode: "NEW" })
  }

  _handleRemove(id) {
    ProductActions.remove(id)
    this._resetStateOfContentMode()
  }

  _handleSelect(id) {
    this.setState({
      contentMode: "EDIT",
      product: ProductStore.getById(id)
    })
  }

  _onChange() {
    this.setState(_getStateFromStores())
  }

  _resetStateOfContentMode() {
    this.setState({ contentMode: "" })
  }

  render() {
    let content;

    switch (this.state.contentMode) {
      case "BUY":
        content = this._getNewPayment()
        break;

      case "EDIT":
        content = this._getEditProduct()
        break;

      case "NEW":
        content = this._getNewProduct()
        break;

      default:
        content = this._getProductList()
    }

    return(
      <div>
        {content}
      </div>
    )
  }
}
