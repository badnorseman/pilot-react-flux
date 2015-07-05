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
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12">
              {this.state.errors}
            </div>
          </div>
          <div className="row">
            <div className="col s6 input-field">
              <RequiredField fieldName="name" fieldType="text" ref="name">
              Name</RequiredField>
            </div>
            <div className="col s6 input-field">
              <RequiredField fieldName="description" fieldType="text" ref="description">
              Description</RequiredField>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <Link to="/products" className="btn waves-effect waves-light">Cancel</Link>
            </div>
            <div className="col s6">
              <button className="btn waves-effect waves-light" type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

NewProduct.contextTypes = {
  router: React.PropTypes.func.isRequired
}
