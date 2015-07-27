// Add callback from server to return when no errors
// Merge Edit and New form
// Accept price in format 1.00 with pattern "\d{5}+(\.\d{2})?"
// Accept price in format 1,00 with pattern "\d{5}+(\,\d{2})?"
import React from "react";
import Button from "../button";
import InputField from "../input_field";
import InputFile from "../input_file";

export default class NewProduct extends React.Component {
  constructor(props) {
    super(props)
    this._getCurrency = this._getCurrency.bind(this)
    this._handleCancel = this._handleCancel.bind(this)
    this._handleAdd = this._handleAdd.bind(this)
  }

  _getCurrency(currencies) {
    for (let k in currencies)
      if (currencies[k].checked === true) return currencies[k].value
  }

  _handleAdd() {
    let currency = this._getCurrency(document.getElementsByName("currency"))
    let description = this.refs.description.state.fieldValue
    let image = this.refs.image.state.file
    let name = this.refs.name.state.fieldValue
    let price = this.refs.price.state.fieldValue

    if (currency && description && name && price) {
      this.props.onAdd({
        currency: currency,
        description: description,
        image: image,
        name: name,
        price: price
      })
    }
  }

  _handleCancel() {
    this.props.onCancel()
  }

  render() {
    return(
      <div>
        <div className="mdl-grid text-center">
          <div className="mdl-cell mdl-cell--12-col">
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
                    fieldPattern="[0-9]{1,}((\.|\,)[0-9]{2,2})?"
                    fieldType="text"
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
                  <Button name="Add" onClick={this._handleAdd}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
