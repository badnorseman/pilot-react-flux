import React from "react";
import { Link } from "react-router";
import ApiRoutes from "../../constants/api_routes";

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div className="mdl-cell mdl-cell--12-col">
          {this.props.item.transaction_date}
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
