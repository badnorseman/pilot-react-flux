import React from "react";
import { Link } from "react-router";
import ImageUtils from "../../utils/image_utils";

export default class UploadImage extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    let name = "Navn"
    let description = "Beskrivelse"
    let image = React.findDOMNode(this.refs.image)

    if (image) {
      ImageUtils.upload({
        product: {
          name: name,
          description: description,
          image: image
        }
      })
    }

    this.context.router.transitionTo("Products")
  }

  render() {
    return(
      <div>
        <div className="row">
          <form className="col s12" id="image-upload-form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12 file-field input-field">
                <input className="file-path validate" type="text"/>
                <div className="btn">
                  <span>Image</span>
                  <input type="file" id="image-file" accept="image/*" ref="image"/>
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

UploadImage.contextTypes = {
  router: React.PropTypes.func.isRequired
}
