import React from "react";
import { Link } from "react-router";
import Braintree from "braintree-web";
import PaymentActions from "../../actions/payment_actions";
import PaymentStore from "../../stores/payment_store";
import ProductStore from "../../stores/product_store";
import Button from "../button";

export default class NewPayment extends React.Component {
  constructor(context, props) {
    super(context, props)
    this.state = {
      clientToken: "",
      errors: [],
      product: ProductStore.getProduct(this.props.query.productId)
    }
    this._handleCancel = this._handleCancel.bind(this)
    this.onPaymentMethodReceived = this.onPaymentMethodReceived.bind(this)
    this._onChange = this._onChange.bind(this)
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
    let clientToken = this.state.clientToken

    Braintree.setup(
      clientToken,
      "dropin", {
        container: "dropin-container",
        onPaymentMethodReceived: this.onPaymentMethodReceived
      }
    )
  }

  _onChange() {
    this.setState({
      clientToken: PaymentStore.getClientToken(),
      errors: PaymentStore.getErrors()
    })
  }

  _handleCancel() {
    this.context.router.transitionTo("/products")
  }

  _handleSubmit(e) {
    e.preventDefault()
  }

  onPaymentMethodReceived(paymentMethod) {
    let amount = this.state.product.price
    let currency = this.state.product.currency
    let paymentMethodNonce = paymentMethod.nonce
    let productId = this.state.product.id

    if (amount && currency && paymentMethodNonce && productId) {
      PaymentActions.add({
        payment: {
          amount: amount,
          currency: currency,
          payment_method_nonce: paymentMethodNonce,
          product_id: productId
        }
      })
    }
  }

  render() {
    return(
      <div>
        <div className="mdl-grid text-center">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div>
              {this.state.product.name}
              <div className="divider"></div>
              {this.state.product.price}
              <div className="divider"></div>
              {this.state.product.currency}
            </div>
            <div className="divider"></div>
            <div>
              <form onSubmit={this._handleSubmit.bind(this)}>
                <div id="dropin-container"></div>
                <Button name="Cancel" onClick={this._handleCancel}/>
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
      </div>
    )
  }
}

NewPayment.contextTypes = {
  router: React.PropTypes.func.isRequired
}
