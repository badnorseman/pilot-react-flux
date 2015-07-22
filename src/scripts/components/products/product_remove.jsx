import React from "react";
import ProductActions from "../../actions/product_actions";

export default class RemoveProduct extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    ProductActions.remove(this.props.id)
    this.context.router.transitionTo("/products")
  }

  render() {
    return(
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        onClick={this.handleClick}>
        Remove
      </button>
    )
  }
}

RemoveProduct.contextTypes = {
  router: React.PropTypes.func.isRequired
}
