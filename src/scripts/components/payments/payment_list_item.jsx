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
        <table className="mdl-data-table mdl-js-data-table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Currency</th>
              <th>Transaction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.item.amount}</td>
              <td className="mdl-data-table__cell--non-numeric">{this.props.item.currency}</td>
              <td className="mdl-data-table__cell--non-numeric">{this.props.item.transaction_id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
