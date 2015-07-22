// Merge Edit and New form
import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import RequiredField from "../required_field";
import InputFile from "../input_file";
import Button from "../button";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      product: ProductStore.getProduct(this.props.params.id)
    }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    ProductStore.addChangeListener(this.onChange)

    document.getElementById(`currency-${this.state.product.currency.toLowerCase()}`).checked = true
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

  handleCancel() {
    this.context.router.transitionTo("/products")
  }

  handleBuy() {
    console.log("handleBuy ", this.state.product.id)
    this.context.router.transitionTo("/payment/new", {productId: this.state.product.id})
  }

  handleRemove() {
    ProductActions.remove(this.state.product.id)
    this.context.router.transitionTo("/products")
  }

  handleSave() {
    let currencies = document.getElementsByName("currency")
    let currency = ""
    for (let i=0; i < currencies.length; i++) {
      if (currencies[i].checked === true) currency = currencies[i].value
    }

    let description = this.refs.description.state.fieldValue
    let image = this.refs.image.state.file
    let name = this.refs.name.state.fieldValue
    let price = this.refs.price.state.fieldValue

    if (currency && description && name && price) {
      ProductActions.edit(
        this.props.params.id, {
        product: {
          currency: currency,
          description: description,
          image: image,
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
        <div className="mdl-grid text-center">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div>
              <form>
                <div>
                  <RequiredField
                    fieldName="name"
                    fieldType="text"
                    fieldValue={this.state.product.name}
                    ref="name">
                    Name
                  </RequiredField>
                </div>
                <div>
                  <RequiredField
                    fieldName="description"
                    fieldType="text"
                    fieldValue={this.state.product.description}
                    ref="description">
                    Description
                  </RequiredField>
                </div>
                <div>
                  <RequiredField
                    fieldName="price"
                    fieldType="number"
                    fieldValue={this.state.product.price}
                    ref="price">
                    Price
                  </RequiredField>
                </div>
                <div>
                  <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-dkk">
                    <input className="mdl-radio__button" id="currency-dkk" type="radio" value="DKK" name="currency"/>
                    <span className="mdl-radio__label">DKK</span>
                  </label>
                  <div className="divider"></div>
                  <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-eur">
                    <input className="mdl-radio__button" id="currency-eur" type="radio" value="EUR" name="currency"/>
                    <span className="mdl-radio__label">EUR</span>
                  </label>
                  <div className="divider"></div>
                  <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-usd">
                    <input className="mdl-radio__button" id="currency-usd" type="radio" value="USD" name="currency"/>
                    <span className="mdl-radio__label">USD</span>
                  </label>
                </div>
                <div>
                  <img src={this.state.product.image} alt=""/>
                </div>
                <InputFile
                  ref="image"/>
                <div>
                  <Button
                    name="Cancel"
                    onClick={this.handleCancel.bind(this)}/>
                  <div className="divider"></div>
                  <Link
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    to="/payment/new"
                    query={{productId: this.state.product.id}}>
                    Buy
                  </Link>
                  <div className="divider"></div>
                  <Button
                    name="Save"
                    onClick={this.handleSave.bind(this)}/>
                  <div className="divider"></div>
                  <Button
                    name="Remove"
                    onClick={this.handleRemove.bind(this)}/>
                  <div className="divider"></div>
                  <Button
                    name="Test Buy"
                    onClick={this.handleBuy.bind(this)}/>
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
