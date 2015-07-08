// Add callback from server to return when no errors
// Merge Add and Edit form
import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import RequiredField from "../required_field";

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
      errors: ProductStore.getErrors()
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let description = this.refs.description.state.fieldValue
    let name = this.refs.name.state.fieldValue

    if (description && name) {
      ProductActions.add({
        product: {
          description: description,
          name: name
        }
      })
      // this.context.router.transitionTo("/products")
    }
  }

  render() {
    return(
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div>
              {this.state.errors}
            </div>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <form onSubmit={this.handleSubmit}>
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                  <RequiredField fieldName="name" fieldType="text" ref="name">
                  Name</RequiredField>
                </div>
                <div className="mdl-cell mdl-cell--6-col">
                  <RequiredField fieldName="description" fieldType="text" ref="description">
                  Description</RequiredField>
                </div>
              </div>
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                  <Link
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    to="/products">Cancel
                  </Link>
                </div>
                <div className="mdl-cell mdl-cell--6-col">
                  <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    type="submit">Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

NewProduct.contextTypes = {
  router: React.PropTypes.func.isRequired
}
