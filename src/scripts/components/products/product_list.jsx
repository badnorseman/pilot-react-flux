import React from "react";
import Item from "./product_item";

export default class extends React.Component {
  render() {
    let items = this.props.items.map(function(item, index) {
      return(
        <div>
          <Item item={item} key={index} />
        </div>
      )
    })

    return(
      <div>
        {items}
      </div>
    );
  }
}
