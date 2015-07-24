// Add callback from server to return when no errors
// Merge Edit and New form
// Accept price in format 1.00 with pattern "\d{5}+(\.\d{2})?"
// Accept price in format 1,00 with pattern "\d{5}+(\,\d{2})?"
import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import Button from "../button";
import InputField from "../input_field";
import InputFile from "../input_file";

export default class NewProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: []
    }
    this._handleCancel = this._handleCancel.bind(this)
    this._handleSave = this._handleSave.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({
      errors: ProductStore.getErrors()
    })
  }

  _getCurrency(currencies) {
    for (let k in currencies)
      if (currencies[k].checked === true) return currencies[k].value
  }

  _handleCancel() {
    this.context.router.transitionTo("/products")
  }

  _handleSave() {
    let currency = this._getCurrency(document.getElementsByName("currency"))
    let description = this.refs.description.state.fieldValue
    let image = this.refs.image.state.file
    let name = this.refs.name.state.fieldValue
    let price = this.refs.price.state.fieldValue

    if (currency && description && name && price) {
      ProductActions.add({
        currency: currency,
        description: description,
        image: image,
        name: name,
        price: price
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
                  <InputField
                    fieldName="name"
                    fieldType="text"
                    ref="name">
                    Name
                  </InputField>
                </div>
                <div>
                  <InputField
                    fieldName="description"
                    fieldType="text"
                    ref="description">
                    Description
                  </InputField>
                </div>
                <div>
                  <InputField
                    fieldName="price"
                    fieldType="number"
                    ref="price">
                    Price
                  </InputField>
                </div>
                <div>
                  <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-dkk">
                    <input className="mdl-radio__button" id="currency-dkk" type="radio" value="DKK" name="currency" defaultChecked/>
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
                <InputFile
                  ref="image"/>
                <div>
                  <Button name="Cancel" onClick={this._handleCancel}/>
                  <div className="divider"></div>
                  <Button name="Add" onClick={this._handleSave}/>
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
