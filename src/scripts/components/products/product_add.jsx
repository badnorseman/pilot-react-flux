import React from "react";
import ProductActions from "../../actions/product_actions";

export default class extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    var name = React.findDOMNode(this.refs.name).value;
    var description = React.findDOMNode(this.refs.description).value;

    if (name && description) {
      var record = {
        product : {
          name: name,
          description: description
        }
      }
      ProductActions.add(record);
      React.findDOMNode(this.refs.name).value = "";
      React.findDOMNode(this.refs.description).value = "";
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="name" />
          <input type="text" ref="description" />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}
