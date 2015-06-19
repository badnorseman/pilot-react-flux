import React from "react";
import RemoveProduct from "./product_remove";

export default class extends React.Component {
  render() {
    let cardImage = document.createElement("img")
    cardImage.src = require("../../../images/Central_Park_jogging.png")
    return(
      <div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card z-depth-3">
              <div className="card-image">
                <img src={cardImage.src}/>
                <span className="card-title">{this.props.item.name}</span>
              </div>
              <div className="card-content">
                {this.props.item.description}
              </div>
              <div className="card-action">
                <RemoveProduct id={this.props.item.id}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
