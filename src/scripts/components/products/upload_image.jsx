import React from "react";
import { Link } from "react-router";
import FileUtils from "../../utils/file_utils";

export default class UploadImage extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    let id = 4 // this.props.id
    let file = document.getElementById("file-selected").files[0]

    if (file) {
      FileUtils.uploadFile(id, file)
    }
    this.context.router.transitionTo("Products")
  }

  render() {
    return(
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}
             encType="multipart/form-data">
            <div className="row">
              <div className="col s12 file-field input-field">
                <input className="file-path validate" type="text"/>
                <div className="btn">
                  <span>Image</span>
                  <input type="file" id="file-selected" ref="selectedFile"
                    accept="image/jpeg, image/jpg, image/png"/>
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
