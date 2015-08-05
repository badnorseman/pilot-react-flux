"use strict";
import React from "react";

export default class TransactionListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="mdl-cell mdl-cell--12-col">
          {this.props.item.date}
          <div className="divider"></div>
          {this.props.item.currency}
          <div className="divider"></div>
          {this.props.item.amount}
          <div className="divider"></div>
          {this.props.item.transaction_id}
        </div>
      </div>
    )
  }
}

TransactionListItem.propTypes = {
  item: React.PropTypes.object.isRequired,
}
