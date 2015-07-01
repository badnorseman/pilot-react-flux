import React from "react";
import FileUtils from "../../utils/file_utils";

export default class uploadFile extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange(e) {
    e.preventDefault()

    let id = this.props.id
    let file = document.getElementById("file-selected").files[0]

    if (file) {
      FileUtils.uploadFile(id, file)
    }
  }

  render() {
    return(
      <div>
        <form encType="multipart/form-data" onChange={this.handleChange.bind(this)}>
          <div className="file-field input-field">
            <input className="file-path validate" type="text"/>
            <div className="btn">
              <span>Select</span>
              <input type="file" id="file-selected" ref="selectedFile"
                accept="image/jpeg, image/jpg, image/png"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

uploadFile.contextTypes = {
  router: React.PropTypes.func.isRequired
}
