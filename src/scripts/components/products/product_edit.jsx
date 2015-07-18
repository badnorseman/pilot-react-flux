// Merge Edit and New form
import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import RequiredField from "../required_field";
import UploadFile from "../upload_file";
import Test from "../test";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      product: ProductStore.getProduct(this.props.params.id)
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTestClick = this.handleTestClick.bind(this)
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
      errors: ProductStore.getErrors(),
      product: ProductStore.getProduct(this.props.params.id)
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let currency = this.refs.currency.state.fieldValue
    let description = this.refs.description.state.fieldValue
    let name = this.refs.name.state.fieldValue
    let price = this.refs.price.state.fieldValue

    if (description && name) {
      ProductActions.edit(
        this.props.params.id, {
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

  handleTestClick() {
    alert("Test was clicked!")
  }

  render() {
    return(
      <div>
        <div className="mdl-grid center">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <RequiredField
                  fieldName="name"
                  fieldType="text"
                  fieldValue={this.state.product.name}
                  ref="name">
                  Name
                </RequiredField>
                <RequiredField
                  fieldName="description"
                  fieldType="text"
                  fieldValue={this.state.product.description}
                  ref="description">
                  Description
                </RequiredField>
                <RequiredField
                  fieldName="price"
                  fieldType="number"
                  fieldValue={this.state.product.price}
                  ref="price">
                  Price
                </RequiredField>
                <RequiredField
                  fieldName="currency"
                  fieldType="text"
                  fieldValue={this.state.product.currency}
                  ref="currency">
                  Currency
                </RequiredField>
                <div>
                  <img src={this.state.product.image} alt=""/>
                </div>
                <UploadFile
                  id={this.props.params.id}
                  file={this.state.product.image}
                  ref="file"/>
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
                    Save
                  </button>
                  <Test
                    id="products"
                    type="text"
                    onClick={this.handleTestClick}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

EditProduct.contextTypes = {
  router: React.PropTypes.func.isRequired
}
