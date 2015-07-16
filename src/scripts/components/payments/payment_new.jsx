// Accept USD in format 1.00 with pattern "\d+(\.\d{2})?"
import React from "react";
import { Link } from "react-router";
import Braintree from "braintree-web";
import PaymentActions from "../../actions/payment_actions";
import PaymentStore from "../../stores/payment_store";
import ProductStore from "../../stores/product_store";

export default class NewPayment extends React.Component {
  constructor(context, props) {
    super(context, props)
    this.state = {
      clientToken: "",
      errors: [],
      product: ProductStore.getProduct(this.props.query.productId)
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
    let amount = this.state.product.price
    let currency = this.state.product.currency
    let paymentMethodNonce = paymentMethod.nonce
    let product_id = this.state.product.id

    PaymentActions.addPayment({
      payment: {
        amount: amount,
        currency: currency,
        payment_method_nonce: paymentMethodNonce,
        product_id: product_id
      }
    })
  }

  render() {
    return(
      <div>
        <div className="mdl-grid center">
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
              <form onSubmit={this.handleSubmit}>
                <div id="dropin-container"></div>
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
