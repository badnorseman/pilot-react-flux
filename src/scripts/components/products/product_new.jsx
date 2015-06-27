// Add callback from server to display any error
// Can error be passed down from products.jsx?
// Merge Add and Edit form
// Add client-side validation e.g. RequiredField
import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";

export default class NewProduct extends React.Component {
  constructor() {
    super()
    this.state = {errors: []}
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    ProductStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      errors: this.state.errors = ProductStore.getErrors()
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let name = React.findDOMNode(this.refs.name).value.trim()
    let description = React.findDOMNode(this.refs.description).value.trim()
    let image = React.findDOMNode(this.refs.image).value.trim()

    if (name && description) {
      ProductActions.add({
        product : {
          name: name,
          description: description,
          image: image
        }
      })
      this.context.router.transitionTo("Products")
    }
  }

  render() {
    return(
      <div>
        <div className="row">
          <form action="#" className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12">
                {this.state.errors}
              </div>
            </div>
            <div className="row">
              <div className="col s6 input-field">
                <input id="name" type="text" ref="name"/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="col s6 input-field">
                <input id="description" type="text" ref="description"/>
                <label htmlFor="description">Description</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 file-field input-field">
                <input className="file-path validate" type="text" ref="image"/>
                <div className="btn">
                  <span>Image</span>
                  <input type="file"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <Link to="Products" className="waves-effect waves-light btn">Cancel</Link>
              </div>
              <div className="col s6">
                <button className="btn waves-effect waves-light" type="submit">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

NewProduct.contextTypes = {
  router: React.PropTypes.func.isRequired
}
