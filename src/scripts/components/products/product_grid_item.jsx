import React from "react";

export default class extends React.Component {
  render() {
    return(
      <div>
        {this.props.item.name}
        {this.props.item.description}
      </div>
    )
  }
};
