import React from "react";
import Item from "./product_item";

export default class extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map(function(item, index) {
          return <Item item={item} key={index} />
        })}
      </div>
    );
  }
}
