"use strict";
import React, { Component, PropTypes } from "react";
import Braintree from "braintree-web";
import * as TransactionActions from "../../actions/transaction_actions";
import TransactionStore from "../../stores/transaction_store";
import Button from "../button";

export default class NewTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientToken: "",
      errors: []
    };
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onPaymentMethodReceived = this._onPaymentMethodReceived.bind(this);
  }

  componentWillMount() {
    TransactionActions.getClientToken()
  }

  componentDidMount() {
    TransactionStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    TransactionStore.removeChangeListener(this._onChange)
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

  _getStateFromStores() {
    return {
      clientToken: TransactionStore.getClientToken(),
      errors: TransactionStore.getErrors()
    }
  }

  _handleClose() {
    this.props.onClose()
  }

  _handleSubmit(e) {
    e.preventDefault()
  }

  _onChange() {
    this.setState(this._getStateFromStores())
  }

  _onPaymentMethodReceived(paymentMethod) {
    let amount = this.props.product.price;
    let currency = this.props.product.currency;
    let id = this.props.product.id;
    let paymentMethodNonce = paymentMethod.nonce;

    if (amount && currency && id && paymentMethodNonce) {
      TransactionActions.add({
        amount: amount,
        currency: currency,
        product_id: id,
        payment_method_nonce: paymentMethodNonce
      })
    }
  }

  render() {
    return (
      <div className="mdl-grid text-center">
        <div className="mdl-cell mdl-cell--12-col">
          <div>{this.state.errors}</div>
          <div>
            {this.props.product.name}
            <div className="divider"></div>
            {this.props.product.price}
            <div className="divider"></div>
            {this.props.product.currency}
          </div>
          <div className="divider"></div>
          <div>
            <form onSubmit={this._handleSubmit}>
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

NewTransaction.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
}
