// Replace api call to action call
// Replace input and label with RequiredField
import React from "react";
import { Link } from "react-router";
import Braintree from "braintree-web";
import PaymentUtils from "../../utils/payment_utils";

export default class NewPaymentPlan extends React.Component {
  constructor(context) {
    super(context)
    this.state = {errors: []}
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let clientToken = PaymentUtils.fetchClientToken()

    console.log("Braintree.setup ", clientToken)

    Braintree.setup(
      clientToken,
      "custom", {
      id: "payment"
      }
    )
  }

  componentWillUnmount() {
  }

  onChange() {
  }

  handleSubmit(e) {
    e.preventDefault()

    PaymentUtils.createPayment({
      amount: "100",
      creditCard: React.findDOMNode(this.refs.creditCard).value,
      expirationDate: React.findDOMNode(this.refs.expirationDate).value
    })
  }

  render() {
    return(
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div>
              <form id="payment" onSubmit={this.handleSubmit}>
                <div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input
                      className="mdl-textfield__input"
                      data-braintree-name="number"
                      id="creditCard"
                      type="text"
                      pattern="[0-9]{13,16}"
                      ref="creditCard"/>
                    <label
                      className="mdl-textfield__label"
                      htmlFor="creditCard">
                      Credit Card
                    </label>
                    <span
                      className="mdl-textfield__error">
                      "must be 16 digits"
                    </span>
                  </div>
                </div>
                <div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input
                      className="mdl-textfield__input"
                      data-braintree-name="expiration_date"
                      id="expirationDate"
                      type="text"
                      pattern="(?:0[1-9]|1[0-2])/([0-9]{2})"
                      ref="expirationDate"/>
                    <label
                      className="mdl-textfield__label"
                      htmlFor="expirationDate">
                      Expiration Date
                    </label>
                    <span
                      className="mdl-textfield__error">
                      "must be in mm/yy format"
                    </span>
                  </div>
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

NewPaymentPlan.contextTypes = {
  router: React.PropTypes.func.isRequired
}
