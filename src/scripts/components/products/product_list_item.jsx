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
            <div className="card materialboxed z-depth-3">
              <div className="card-image">
                <img className="responsive-img" src={cardImage.src} alt=""/>
              </div>
              <div className="card-content flow-text">
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.description}</p>
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
