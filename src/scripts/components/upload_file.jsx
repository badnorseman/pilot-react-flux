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
      <div className="file-field input-field" onChange={this.handleChange}>
        <input className="file-path validate" type="text"/>
        <div className="btn">
          <span>Select</span>
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
