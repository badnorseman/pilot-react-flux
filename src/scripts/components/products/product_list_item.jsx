import React from "react"
import RemoveProduct from "./product_remove"

export default class extends React.Component {
  render() {
    let cardImage = document.createElement("img")
    cardImage.src = require("../../../images/Central_Park_jogging.png")

    return(
      <div>
        <div className="col s12 m3">
          <div className="card z-depth-3">
            <div className="card-image">
              <img className="responsive-img" src={cardImage.src} alt=""/>
            </div>
            <div className="card-content flow-text">
              <h5>{this.props.item.name}</h5>
              <h6>{this.props.item.description}</h6>
            </div>
            <div className="card-action">
              <RemoveProduct id={this.props.item.id}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
