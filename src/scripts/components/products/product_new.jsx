import React from "react";
import Mui from "material-ui";
import ProductActions from "../../actions/product_actions";

export default class extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    var name = React.findDOMNode(this.refs.name).value
    var description = React.findDOMNode(this.refs.description).value

    if (name && description) {
      ProductActions.add({
        product : {
          name: name,
          description: description
        }
      })
      React.findDOMNode(this.refs.name).value = ""
      React.findDOMNode(this.refs.description).value = ""
    }
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input id="name" type="text" ref="name"/>
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="description" type="text" ref="description"/>
                  <label htmlFor="description">Description</label>
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <a className="waves-effect waves-light btn">Cancel</a>
                </div>
                <div className="col s6">
                  <button className="btn waves-effect waves-light" type="submit">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
