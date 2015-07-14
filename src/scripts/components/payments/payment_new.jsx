// Pass in Product id and getProduct from ProductStore
// Change fixed amount to Product price
// Accept USD in format 1.00 with pattern "\d+(\.\d{2})?"
import React from "react";
import { Link } from "react-router";
import Braintree from "braintree-web";
import PaymentActions from "../../actions/payment_actions";
import PaymentStore from "../../stores/payment_store";
import RequiredField from "../required_field";

export default class NewPayment extends React.Component {
  constructor(context) {
    super(context)
    this.state = {
      clientToken: "",
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onPaymentMethodReceived = this.onPaymentMethodReceived.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount() {
    PaymentActions.requestClientToken()
  }

  componentDidMount() {
    PaymentStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    PaymentStore.removeChangeListener(this.onChange)
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

  onChange() {
    this.setState({
      clientToken: PaymentStore.getClientToken(),
      errors: PaymentStore.getErrors()
    })
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  onPaymentMethodReceived(paymentMethod) {
    let amount = 100
    let paymentMethodNonce = paymentMethod.nonce
    let product_id = 1

    PaymentActions.addPayment({
      transaction: {
        amount: amount,
        payment_method_nonce: paymentMethodNonce,
        product_id: product_id
      }
    })
  }

  render() {
    let amount = 100
    let product_id = 1

    return(
      <div>
        <div className="mdl-grid center">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div id="dropin-container"></div>
                <div>
                  Product {product_id}
                  <div className="divider"></div>
                  Amount {amount}
                </div>
                <Link
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  to="/products">
                  Cancel
                </Link>
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
