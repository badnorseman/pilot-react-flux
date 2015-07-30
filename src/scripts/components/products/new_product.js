import React, { PropTypes } from "react";
import ProductForm from "./product_form";
import Button from "../button";

export default class NewProduct extends React.Component {
  constructor(props) {
    super(props)
    this._handleAdd = this._handleAdd.bind(this)
    this._handleClose = this._handleClose.bind(this)
  }

  _handleAdd(product) {
    this.props.onAdd(product)
  }

  _handleClose() {
    this.props.onClose()
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
            onClose={this._handleClose}
            onSubmit={this._handleAdd}/>
        </div>
      </div>
    )
  }
}

NewProduct.propTypes = {
  currency: React.PropTypes.string,
  description: React.PropTypes.string,
  id: React.PropTypes.number,
  image: React.PropTypes.string,
  name: React.PropTypes.string,
  price: React.PropTypes.number,
  onAdd: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired
}
