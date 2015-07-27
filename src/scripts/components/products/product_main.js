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
      product: {},
      products: [],
      isNew: false,
      isSelected: false
    }
    this._handleAdd = this._handleAdd.bind(this)
    this._handleBuy = this._handleBuy.bind(this)
    this._handleCancel = this._handleCancel.bind(this)
    this._handleChange = this._handleChange.bind(this)
    this._handleEdit = this._handleEdit.bind(this)
    this._handleNew = this._handleNew.bind(this)
    this._handleRemove = this._handleRemove.bind(this)
    this._handleSelect = this._handleSelect.bind(this)
    this._setState = this._setState.bind(this)
  }

  componentWillMount() {
    ProductActions.list()
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._handleChange)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._handleChange)
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  _handleChange() {
    this.setState({
      products: this.state.products = ProductStore.getAll()
    })
    console.log("ProductMain _handleChange", this.state, this.props)
  }

  _handleAdd(product) {
    ProductActions.add(product)
    this.setState({
      isNew: false,
      isSelected: false
    })
  }

  _handleBuy(id) {
    this.setState({
      isNew: false,
      isSelected: false
    })
    console.log("ProductMain _handleBuy", this.state)
  }

  _handleCancel() {
    this.setState({
      isNew: false,
      isSelected: false
    })
  }

  _handleEdit(product) {
    ProductActions.edit(product)
    this.setState({
      isNew: false,
      isSelected: false
    })
    console.log("ProductMain _handleEdit", this.state)
  }

  _handleNew() {
    this.setState({
      isNew: true,
      isSelected: false
    })
  }

  _handleRemove(id) {
    ProductActions.remove(id)
    this.setState({
      isNew: false,
      isSelected: false
    })
  }

  _handleSelect(id) {
    this.setState({
      isNew: false,
      isSelected: true,
      product: ProductStore.getById(id)
    })
  }

  _setState(isNew, isSelected) {
    this.setState({
      isNew: isNew,
      isSelected: isSelected
    })
    console.log("ProductMain _setState", this.state)
  }

  render() {
    let content;
    if (this.state.isNew) {
      content =
        <NewProduct
          onCancel={this._handleCancel}
          onAdd={this._handleAdd}/>
      } else if (this.state.isSelected) {
      content =
        <EditProduct
          product={this.state.product}
          onBuy={this._handleBuy}
          onCancel={this._handleCancel}
          onEdit={this._handleEdit}
          onRemove={this._handleRemove}/>
    } else {
      content =
        <ProductList
          products={this.state.products}
          onNew={this._handleNew}
          onSelect={this._handleSelect}/>
    }
    console.log("ProductMain render", this.state)
    return(
      <div>
        {content}
      </div>
    )
  }
}
