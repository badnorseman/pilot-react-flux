import React from "react";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.context.router.transitionTo("/product/new")
  }

  render() {
    return(
      <button
        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-button--floating-action"
        onClick={this.handleClick}>
        <i className="material-icons">add</i>
      </button>
    )
  }
}

AddProduct.contextTypes = {
  router: React.PropTypes.func.isRequired
}
