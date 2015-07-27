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

  // How do I update this onSelect as describe https://facebook.github.io/react/tips/communicate-between-components.html
  render() {
    let items = this.props.products.map(item => {
      return <ProductListItem key={item.id} item={item} onClick={this._handleSelect}/>
    })

    return(
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
