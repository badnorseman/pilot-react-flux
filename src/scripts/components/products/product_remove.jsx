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
      <button className="btn-floating btn-large red waves-effect waves-light" onClick={this.handleClick}>
        <i className="mdi-content-remove"></i></button>
    )
  }
}
