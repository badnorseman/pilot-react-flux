import React from "react";
import ProductActions from "../../actions/product_actions";

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    ProductActions.remove(this.props.id)
  }

  render() {
    return(
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        onClick={this.handleClick}>Remove
      </button>
    )
  }
}
