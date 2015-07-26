import React from "react";
import { Link } from "react-router";
import ApiRoutes from "../../constants/api_routes";

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var titleStyle = {
      backgroundImage:'url(' + this.props.item.image + ')',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      height:160,
      WebkitTransition:'all',
      msTransition: 'all'
    }

    return(
      <div>
        <Link to={`/products/${this.props.item.id}`} params={{id: this.props.item.id}}>
          <div className="mdl-cell mdl-cell--6-col-phone mdl-cell--4-col-tablet mdl-cell--3-col-desktop">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title" style={titleStyle}>
              </div>
              <div className="mdl-card__supporting-text">
                <h6>{this.props.item.name}</h6>
                <p>{this.props.item.description}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

ProductListItem.propTypes = {
  item: React.PropTypes.object.isRequired,
}
