"use strict";
import React from "react";
import ProductListItem from "./product_list_item";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this._handleNew = this._handleNew.bind(this)
    this._handleSelect = this._handleSelect.bind(this)
  }

  _handleNew() {
    this.props.onNew()
  }

  _handleSelect(id) {
    this.props.onSelect(id)
  }

  render() {
    let items = this.props.products.map((item, index) => {
      return (
        <ProductListItem key={index} item={item}/>
      );
    })

    return (
      <div>
        <div className="mdl-grid">
          {items}
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-button--floating-action"
          onClick={this._handleNew}>
          <i className="material-icons">add</i>
        </button>
      </div>
    )
  }
}
