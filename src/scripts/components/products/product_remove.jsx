import React from "react";
import ProductActions from "../../actions/product_actions";

export default class extends React.Component {
  constructor(id) {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    ProductActions.remove(this.props.id)
  }

  render() {
    return(
      <button className="btn waves-effect waves-light" onClick={this.handleClick}>Remove</button>
    )
  }
};
