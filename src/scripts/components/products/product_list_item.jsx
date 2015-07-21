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
        <div className="mdl-cell mdl-cell--6-col-phone mdl-cell--4-col-tablet mdl-cell--3-col-desktop">
          <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__media">
              <img src={this.props.item.image} alt=""/>
            </div>
            <div className="mdl-card__supporting-text">
              <h6>{this.props.item.name}</h6>
              <p>{this.props.item.description}</p>
            </div>
            <div className="mdl-card__actions text-center">
              <Link
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                to={`/products/${this.props.item.id}`}
                params={{id: this.props.item.id}}>
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
