// Replace input and label with RequiredField
import React from "react";
import { Link } from "react-router";
import Braintree from "braintree-web";
import PaymentActions from "../../actions/payment_actions";
import PaymentStore from "../../stores/payment_store";

export default class NewPaymentPlan extends React.Component {
  constructor(context) {
    super(context)
    this.state = {
      clientToken: "",
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount() {
    PaymentActions.requestClientToken()
  }

  componentDidMount() {
    PaymentStore.addChangeListener(this.onChange)

    // Braintree.setup(
    //   clientToken,
    //   "custom", {
    //   id: "payment"
    //   }
    // )
  }

  componentWillUnmount() {
    PaymentStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      clientToken: PaymentStore.getClientToken(),
      errors: PaymentStore.getErrors()
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let amount = "100"
    let creditCard = React.findDOMNode(this.refs.creditCard).value
    let expirationDate = React.findDOMNode(this.refs.expirationDate).value

    if (creditCard && expirationDate) {
      PaymentActions.create({
        amount: amount,
        creditCard: creditCard,
        expirationDate: expirationDate
      })
    }
  }

  render() {
    return(
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div>{this.state.clientToken}</div>
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
