import React from "react";
import RemoveProduct from "./product_remove";

export default class extends React.Component {
  render() {
    return(
      <div>
        {this.props.item.name}
        {this.props.item.description}
        <RemoveProduct id={this.props.item.id} />
      </div>
    )
  }
}
