import React from "react";
import ProductForm from "./product_form";
import Button from "../button";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this._handleBuy = this._handleBuy.bind(this)
    this._handleCancel = this._handleCancel.bind(this)
    this._handleEdit = this._handleEdit.bind(this)
    this._handleRemove = this._handleRemove.bind(this)
  }

  _handleBuy() {
    this.props.onBuy(this.props.id)
  }

  _handleCancel() {
    this.props.onCancel()
  }

  // Should this call Action Update here?
  _handleEdit(product) {
    this.props.onEdit({
      currency: product.currency,
      description: product.description,
      id: this.props.id,
      image: product.image,
      name: product.name,
      price: product.price
    })
  }

  _handleRemove() {
    this.props.onRemove(this.props.product.id)
  }

  render() {
    return(
      <div className="mdl-grid text-center">
        <div className="mdl-cell mdl-cell--12-col">
          <ProductForm
            currency={this.props.currency}
            description={this.props.description}
            image={this.props.image}
            name={this.props.name}
            price={this.props.price}
            onCancel={this._handleCancel}
            onSubmit={this._handleEdit}/>
          <div className="divider"></div>
          <Button name="Buy" onClick={this._handleBuy}/>
          <div className="divider"></div>
          <Button name="Remove" onClick={this._handleRemove}/>
        </div>
      </div>
    )
  }
}

EditProduct.propTypes = {
  currency: React.PropTypes.string,
  description: React.PropTypes.string,
  id: React.PropTypes.number.isRequired,
  image: React.PropTypes.string,
  name: React.PropTypes.string,
  price: React.PropTypes.string
}
