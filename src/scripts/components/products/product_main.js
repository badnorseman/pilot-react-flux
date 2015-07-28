import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import ProductList from "./product_list";
import NewProduct from "./new_product";
import EditProduct from "./edit_product";

export default class ProductMain extends React.Component {
  constructor() {
    super()
    this.state = {
      isNew: false,
      isSelected: false,
      products: [],
      selectedProduct: {}
    }
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

  _handleAdd(product) {
    ProductActions.add(product)
    this._setState(false, false)
  }

  _handleBuy(id) {
    this._setState(false, false)
  }

  _handleClose() {
    this._setState(false, false)
  }

  _handleEdit(product) {
    ProductActions.edit(product)
    this._setState(false, false)
  }

  _handleNew() {
    this._setState(true, false)
  }

  _handleRemove(id) {
    ProductActions.remove(id)
    this._setState(false, false)
  }

  _handleSelect(id) {
    this.setState({
      selectedProduct: ProductStore.getById(id),
      isNew: false,
      isSelected: true
    })
  }

  _onChange() {
    this.setState({
      products: this.state.products = ProductStore.getAll()
    })
  }

  _setState(isNew, isSelected) {
    this.setState({
      isNew: isNew,
      isSelected: isSelected
    })
  }

  render() {
    let content;
    if (this.state.isNew) {
      content =
        <NewProduct
          onAdd={this._handleAdd}
          onClose={this._handleClose}/>
      } else if (this.state.isSelected && this.state.selectedProduct) {
      content =
        <EditProduct
          product={this.state.selectedProduct}
          onBuy={this._handleBuy}
          onClose={this._handleClose}
          onEdit={this._handleEdit}
          onRemove={this._handleRemove}/>
    } else {
      content =
        <ProductList
          products={this.state.products}
          onNew={this._handleNew}
          onSelect={this._handleSelect}/>
    }
    return(
      <div>
        {content}
      </div>
    )
  }
}
