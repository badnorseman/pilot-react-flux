import React from "react";
import PaymentActions from "../../actions/payment_actions";
import PaymentStore from "../../stores/payment_store";
import PaymentListItem from "./payment_list_item";

function _getStateFromStores() {
  return {
    payments: PaymentStore.getAll()
  }
}

export default class PaymentList extends React.Component {
  constructor() {
    super()
    this.state = _getStateFromStores()
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    PaymentActions.list()
  }

  componentDidMount() {
    PaymentStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    PaymentStore.removeChangeListener(this._onChange)
  }

  _getPaymentListItems(item) {
    return(
      <PaymentListItem
        key={item.id}
        item={item}/>
    )
  }

  _onChange() {
    this.setState(_getStateFromStores())
  }

  render() {
    let items = this.state.payments.map(this._getPaymentListItems)

    return(
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div>
            ORDER DATE
            <div className="divider"></div>
            PRICE
            <div className="divider"></div>
            ORDER ID
          </div>
          {items}
        </div>
      </div>
    )
  }
}
