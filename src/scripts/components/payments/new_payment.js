import React from "react";
import Braintree from "braintree-web";
import PaymentActions from "../../actions/payment_actions";
import PaymentStore from "../../stores/payment_store";
import Button from "../button";

function _getStateFromStores() {
  return {
    clientToken: PaymentStore.getClientToken()
  }
}

export default class NewPayment extends React.Component {
  constructor(props) {
    super(props)
    this.state = _getStateFromStores()
    this._handleClose = this._handleClose.bind(this)
    this._onChange = this._onChange.bind(this)
    this._onPaymentMethodReceived = this._onPaymentMethodReceived.bind(this)
  }

  componentWillMount() {
    PaymentActions.requestClientToken()
  }

  componentDidMount() {
    PaymentStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    PaymentStore.removeChangeListener(this._onChange)
  }

  componentDidUpdate() {
    Braintree.setup(
      this.state.clientToken,
      "dropin", {
        container: "dropin-container",
        onPaymentMethodReceived: this._onPaymentMethodReceived
      }
    )
  }

  _handleClose() {
    this.props.onClose()
  }

  _handleSubmit(e) {
    e.preventDefault()
  }

  _onChange() {
    this.setState(_getStateFromStores())
  }

  _onPaymentMethodReceived(paymentMethod) {
    let amount = this.props.product.price
    let currency = this.props.product.currency
    let id = this.props.product.id
    let paymentMethodNonce = paymentMethod.nonce

    if (amount && currency && id && paymentMethodNonce) {
      PaymentActions.add({
        payment: {
          amount: amount,
          currency: currency,
          product_id: id,
          payment_method_nonce: paymentMethodNonce
        }
      })
    }
    // There must better way. How to handle errors?
    this.props.onClose()
  }

  render() {
    return (
      <div className="mdl-grid text-center">
        <div className="mdl-cell mdl-cell--12-col">
          <div>
            {this.props.product.name}
            <div className="divider"></div>
            {this.props.product.price}
            <div className="divider"></div>
            {this.props.product.currency}
          </div>
          <div className="divider"></div>
          <div>
            <form onSubmit={this._handleSubmit.bind(this)}>
              <div id="dropin-container"></div>
              <Button name="Close" onClick={this._handleClose}/>
              <div className="divider"></div>
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                type="submit">
                Buy
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

NewPayment.propTypes = {
  product: React.PropTypes.object.isRequired,
  onClose: React.PropTypes.func.isRequired
}
