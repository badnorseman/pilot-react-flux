// Merge Edit and New form
import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import RequiredField from "../required_field";
import UploadFile from "../upload_file";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      product: ProductStore.getProduct(this.props.params.id)
    }
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
      errors: ProductStore.getErrors(),
      product: ProductStore.getProduct(this.props.params.id)
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let currency = e.target.elements.currency.value
    let description = this.refs.description.state.fieldValue
    let name = this.refs.name.state.fieldValue
    let price = this.refs.price.state.fieldValue

    if (description && name && price) {
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
                <div>
                  <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-dkk">
                    <input className="mdl-radio__button" id="currency-dkk" type="radio" value="DKK" name="currency" ref="currency" defaultChecked/>
                    <span className="mdl-radio__label">DKK</span>
                  </label>
                  <div className="divider"></div>
                  <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-eur">
                    <input className="mdl-radio__button" id="currency-eur" type="radio" value="EUR" name="currency" ref="currency"/>
                    <span className="mdl-radio__label">EUR</span>
                  </label>
                  <div className="divider"></div>
                  <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-usd">
                    <input className="mdl-radio__button" id="currency-usd" type="radio" value="USD" name="currency" ref="currency"/>
                    <span className="mdl-radio__label">USD</span>
                  </label>
                </div>
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
