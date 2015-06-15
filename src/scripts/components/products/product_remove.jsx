import React from "react";
import ProductActions from "../../actions/product_actions";

export default class extends React.Component {
  handleClick() {
    ProductActions.remove(this.props.id);
  }

  render() {
    return(
      <button onClick={this.handleClick.bind(this)}>Remove</button>
    )
  }
}
