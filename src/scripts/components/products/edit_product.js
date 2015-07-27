// Merge Edit and New form
import React from "react";
import Button from "../button";
import InputField from "../input_field";
import InputFile from "../input_file";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this._getCurrency = this._getCurrency.bind(this)
    this._handleBuy = this._handleBuy.bind(this)
    this._handleCancel = this._handleCancel.bind(this)
    this._handleClick = this._handleClick.bind(this)
    this._handleEdit = this._handleEdit.bind(this)
    this._handleRemove = this._handleRemove.bind(this)
    this._setCurrency = this._setCurrency.bind(this)
  }

  componentDidMount() {
    this._setCurrency(this.props.product.currency)
  }

  _getCurrency(currencies) {
    for (let k in currencies)
      if (currencies[k].checked === true) return currencies[k].value
  }

  _handleBuy() {
    this.props.onBuy(this.props.product.id)
  }

  _handleCancel() {
    this.props.onCancel()
  }

  _handleClick(event) {
    alert(`Currency ${event.target.value} selected`)
  }

  // Should this call Action Update here?
  _handleEdit() {
    let currency = this._getCurrency(document.getElementsByName("currency"))
    let description = this.refs.description.state.fieldValue
    let id = this.props.product.id
    let image = this.refs.image.state.file
    let name = this.refs.name.state.fieldValue
    let price = this.refs.price.state.fieldValue

    if (currency && description && id && name && price) {
      this.props.onEdit({
        id: id,
        currency: currency,
        description: description,
        image: image,
        name: name,
        price: price
      })
    }
  }

  _handleRemove() {
    this.props.onRemove(this.props.product.id)
  }

  _setCurrency(currency) {
    document.getElementById(`currency-${currency.toLowerCase()}`).checked = true
  }

  render() {
    return(
      <div>
        <div className="mdl-grid text-center">
          <div className="mdl-cell mdl-cell--12-col">
            <form>
              <div>
                <InputField
                  fieldName="name"
                  fieldPattern="[a-zA-Z0-9]{1,}[.:-\s]{0,}?"
                  fieldError="Must be letter, number, .,: or -"
                  fieldType="text"
                  fieldValue={this.props.product.name}
                  ref="name">
                  Name
                </InputField>
              </div>
              <div>
                <InputField
                  fieldName="description"
                  fieldType="text"
                  fieldValue={this.props.product.description}
                  ref="description">
                  Description
                </InputField>
              </div>
              <div>
                <InputField
                  fieldName="price"
                  fieldPattern="[0-9]{1,}((\.|\,)[0-9]{2,2})?"
                  fieldType="text"
                  fieldValue={this.props.product.price}
                  ref="price">
                  Price
                </InputField>
              </div>
              <div>
                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-dkk">
                  <input className="mdl-radio__button" id="currency-dkk" type="radio" value="DKK" name="currency" onClick={this._handleClick}/>
                  <span className="mdl-radio__label">DKK</span>
                </label>
                <div className="divider"></div>
                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-eur">
                  <input className="mdl-radio__button" id="currency-eur" type="radio" value="EUR" name="currency" onClick={this._handleClick}/>
                  <span className="mdl-radio__label">EUR</span>
                </label>
                <div className="divider"></div>
                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-usd">
                  <input className="mdl-radio__button" id="currency-usd" type="radio" value="USD" name="currency" onClick={this._handleClick}/>
                  <span className="mdl-radio__label">USD</span>
                </label>
              </div>
              <div>
                <img src={this.props.product.image} alt=""/>
              </div>
              <InputFile
                ref="image"/>
              <div>
                <Button name="Cancel" onClick={this._handleCancel}/>
                <div className="divider"></div>
                <Button name="Buy" onClick={this._handleBuy}/>
                <div className="divider"></div>
                <Button name="Save" onClick={this._handleEdit}/>
                <div className="divider"></div>
                <Button name="Remove" onClick={this._handleRemove}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
