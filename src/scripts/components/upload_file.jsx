import React from "react";
import FileUtils from "../utils/file_utils";

export default class uploadFile extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()

    let file = document.getElementById("file-selected").files[0]

    if (file) {
      FileUtils.uploadFile(this.props.id, file)
    }
  }

  render() {
    return(
      <div className="" onChange={this.handleChange}>
        <input className="" type="text"/>
        <div className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
          <span>Upload</span>
          <input type="file" id="file-selected" ref="selectedFile"
            accept="image/jpeg, image/jpg, image/png"/>
        </div>
      </div>
    )
  }
}

uploadFile.contextTypes = {
  router: React.PropTypes.func.isRequired
}
