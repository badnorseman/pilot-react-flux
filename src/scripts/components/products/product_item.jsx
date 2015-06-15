import React from "react";
import RemoveItem from "./product_remove";

export default class extends React.Component {
  render() {
    return(
      <div>
        {this.props.item.name}
        {this.props.item.description}
        <RemoveItem id={this.props.item.id} />
      </div>
    )
  }
}
