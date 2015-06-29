import React from "react";
import { Link } from "react-router";

export default class ProductImage extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    let id = 4 // this.props.id
    let image = React.findDOMNode(this.refs.image).value.trim()

  }

  render() {
    return(
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12 file-field input-field">
                <input className="file-path validate" type="text" ref="image"/>
                <div className="btn">
                  <span>Image</span>
                  <input type="file"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <Link to="Products" className="waves-effect waves-light btn">Cancel</Link>
              </div>
              <div className="col s6">
                <button className="btn waves-effect waves-light" type="submit">Upload</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

ProductImage.contextTypes = {
  router: React.PropTypes.func.isRequired
}
