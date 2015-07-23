import React from "react";
import { Link } from "react-router";
import ApiRoutes from "../../constants/api_routes";

export default class ProductListItem extends React.Component {
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
          </div>
        </div>
      </div>
    )
  }
}
