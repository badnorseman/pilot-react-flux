// Merge Edit and New form
import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import Button from "../button";
import InputField from "../input_field";
import InputFile from "../input_file";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      product: ProductStore.getById(this.props.params.id)
    }
    this._getCurrency = this._getCurrency.bind(this)
    this._setCurrency = this._setCurrency.bind(this)
    this._handleCancel = this._handleCancel.bind(this)
    this._handleRemove = this._handleRemove.bind(this)
    this._handleSave = this._handleSave.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    ProductActions.list()
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange)
    this._setCurrency(this.state.product.currency)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({
      errors: ProductStore.getErrors(),
      product: ProductStore.getById(this.props.params.id)
    })
  }

  _getCurrency(currencies) {
    for (let k in currencies)
      if (currencies[k].checked === true) return currencies[k].value
  }

  _setCurrency(currency) {
    document.getElementById(`currency-${currency.toLowerCase()}`).checked = true
  }

  _handleCancel() {
    this.context.router.transitionTo("/products")
  }

  _handleRemove() {
    ProductActions.remove(this.state.product.id)
    this.context.router.transitionTo("/products")
  }

  _handleSave() {
    let currency = this._getCurrency(document.getElementsByName("currency"))
    let description = this.refs.description.state.fieldValue
    let id = this.props.params.id
    let image = this.refs.image.state.file
    let name = this.refs.name.state.fieldValue
    let price = this.refs.price.state.fieldValue

    if (currency && description && id && name && price) {
      ProductActions.edit({
        id: id,
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
                    fieldPattern="[a-zA-Z0-9.:-]{1,}?"
                    fieldType="text"
                    fieldValue={this.state.product.name}
                    ref="name">
                    Name
                  </InputField>
                </div>
                <div>
                  <InputField
                    fieldName="description"
                    fieldType="text"
                    fieldValue={this.state.product.description}
                    ref="description">
                    Description
                  </InputField>
                </div>
                <div>
                  <InputField
                    fieldName="price"
                    fieldPattern="[0-9]{1,}((\.|\,)[0-9]{2,2})?"
                    fieldType="text"
                    fieldValue={this.state.product.price}
                    ref="price">
                    Price
                  </InputField>
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
                  <Button name="Cancel" onClick={this._handleCancel}/>
                  <div className="divider"></div>
                  <Link to="/payment/new" query={{productId: this.state.product.id}}>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                      Buy
                    </button>
                  </Link>
                  <div className="divider"></div>
                  <Button name="Save" onClick={this._handleSave}/>
                  <div className="divider"></div>
                  <Button name="Remove" onClick={this._handleRemove}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

EditProduct.propTypes = {
  params: React.PropTypes.object.isRequired,
}

EditProduct.contextTypes = {
  router: React.PropTypes.func.isRequired
}
