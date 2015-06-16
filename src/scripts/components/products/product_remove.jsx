import React from "react"
import { remove } from "../../actions/product_actions"

export default class extends React.Component {
  handleClick() {
    remove(this.props.id)
  }

  render() {
    return(
      <button onClick={this.handleClick.bind(this)}>Remove</button>
    )
  }
}
