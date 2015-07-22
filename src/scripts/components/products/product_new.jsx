// Add callback from server to return when no errors
// Merge Edit and New form
// Accept price in format 1.00 with pattern "\d{5}+(\.\d{2})?"
// Accept price in format 1,00 with pattern "\d{5}+(\,\d{2})?"
import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import Button from "../button";
import RequiredField from "../required_field";
import InputFile from "../input_file";

export default class NewProduct extends React.Component {
  constructor() {
    super()
    this.state = {errors: []}
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

  handleCancel() {
    this.context.router.transitionTo("/products")
  }

  handleSave() {
    function currencySelected(currencies) {
      for (let i in currencies)
        if (currencies[k].checked === true) return currencies[k].value
    }
    let currency = currencySelected(document.getElementsByName("currency"))
    let description = this.refs.description.state.fieldValue
    let image = this.refs.image.state.file
    let name = this.refs.name.state.fieldValue
    let price = this.refs.price.state.fieldValue

    if (currency && description && name && price) {
      ProductActions.add({
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
                    ref="name">
                    Name
                  </RequiredField>
                </div>
                <div>
                  <RequiredField
                    fieldName="description"
                    fieldType="text"
                    ref="description">
                    Description
                  </RequiredField>
                </div>
                <div>
                  <RequiredField
                    fieldName="price"
                    fieldType="number"
                    ref="price">
                    Price
                  </RequiredField>
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
                  <Button name="Cancel" onClick={this.handleCancel.bind(this)}/>
                  <div className="divider"></div>
                  <Button name="Add" onClick={this.handleSave.bind(this)}/>
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
