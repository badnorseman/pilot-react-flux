import React, { PropTypes } from "react";
import ProductForm from "./product_form";
import Button from "../button";

export default class NewProduct extends React.Component {
  constructor(props) {
    super(props)
    this._handleCancel = this._handleCancel.bind(this)
    this._handleAdd = this._handleAdd.bind(this)
  }

  _handleAdd(product) {
    this.props.onAdd({
      currency: product.currency,
      description: product.description,
      image: product.image,
      name: product.name,
      price: product.price
    })
  }

  _handleCancel() {
    this.props.onCancel()
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
            onSubmit={this._handleAdd}/>
        </div>
      </div>
    )
  }
}

NewProduct.propTypes = {
  currency: React.PropTypes.string,
  description: React.PropTypes.string,
  image: React.PropTypes.string,
  name: React.PropTypes.string,
  price: React.PropTypes.string
}
