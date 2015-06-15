import React from "react";
import Item from "./product_list_item";

export default class extends React.Component {
  render() {
    let items = this.props.items.map(function(item, index) {
      return(
        <Item item={item} key={index} />
      )
    })

    return(
      <div>
        {items}
      </div>
    );
  }
}
