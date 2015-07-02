import React from "react";
import { Link } from "react-router";
import ApiRoutes from "../../constants/api_routes";
import RemoveProduct from "./product_remove";

export default class extends React.Component {
  render() {
    let img = ApiRoutes.HOST + this.props.item.image

    return(
      <div>
        <div className="col s12 m3">
          <div className="card z-depth-3">
            <div className="card-image">
              <img className="responsive-img" src={img} alt=""/>
            </div>
            <div className="card-content flow-text">
              <h5>{this.props.item.name}</h5>
              <h6>{this.props.item.description}</h6>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="col s6">
                  <Link to="product" params={{id: this.props.item.id}} className="btn waves-effect waves-light">
                    Edit</Link>
                </div>
                <div className="col s6">
                  <RemoveProduct id={this.props.item.id}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
