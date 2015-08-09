"use strict";
import React, { Component, PropTypes } from "react";
import * as TransactionActions from "../../actions/transaction_actions";
import TransactionStore from "../../stores/transaction_store";
import TransactionListItem from "./transaction_list_item";

export default class TransactionList extends Component {
  constructor(context) {
    super(context);
    this.state = {
      transactions: []
    };
    this._onChange = this._onChange.bind(this);
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

  _getStateFromStores() {
    return {
      transactions: TransactionStore.getAll()
    }
  }

  _onChange() {
    this.setState(this._getStateFromStores())
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

TransactionList.contextTypes = {
  router: PropTypes.func.isRequired
}
