// Add callback from server to return when no errors
// Merge Edit and New form
import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import RequiredField from "../required_field";

export default class NewProduct extends React.Component {
  constructor() {
    super()
    this.state = {errors: []}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
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

    let currency = this.refs.currency.state.fieldValue
    let description = this.refs.description.state.fieldValue
    let name = this.refs.name.state.fieldValue
    let price = this.refs.price.state.fieldValue

    if (description && name) {
      ProductActions.add({
        product: {
          currency: currency,
          description: description,
          name: name,
          price: price
        }
      })
      this.context.router.transitionTo("/products")
    }
  }

  render() {
    return(
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <RequiredField
                  fieldName="name"
                  fieldType="text"
                  ref="name">
                  Name
                </RequiredField>
                <RequiredField
                  fieldName="description"
                  fieldType="text"
                  ref="description">
                  Description
                </RequiredField>
                <RequiredField
                  fieldName="price"
                  fieldType="number"
                  ref="price">
                  Price
                </RequiredField>
                <RequiredField
                  fieldName="currency"
                  fieldType="text"
                  ref="currency">
                  Currency
                </RequiredField>
                <div>
                  <Link
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    to="/products">
                    Cancel
                  </Link>
                  <div className="divider"></div>
                  <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

NewProduct.contextTypes = {
  router: React.PropTypes.func.isRequired
}
