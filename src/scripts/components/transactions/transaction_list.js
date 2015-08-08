"use strict";
import React, { Component } from "react";
import * as TransactionActions from "../../actions/transaction_actions";
import TransactionStore from "../../stores/transaction_store";
import TransactionListItem from "./transaction_list_item";

function _getStateFromStores() {
  return {
    transactions: TransactionStore.getAll()
  }
}

export default class TransactionList extends Component {
  constructor() {
    super()
    this.state = _getStateFromStores()
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    TransactionActions.list()
  }

  componentDidMount() {
    TransactionStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    TransactionStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState(_getStateFromStores())
  }

  render() {
    let items = this.state.transactions.map((item, index) => {
      return (
        <TransactionListItem key={index} item={item}/>
      );
    })

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div>
            TRANSACTION DATE
            <div className="divider"></div>
            AMOUNT
            <div className="divider"></div>
            TRANSACTION ID
          </div>
          {items}
        </div>
      </div>
    )
  }
}
