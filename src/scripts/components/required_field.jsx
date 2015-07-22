// Enable to pass in validators e.g. required, number, amount etc.
// Each validators would have own pattern and each pattern world have an error message.
import React from "react";

export default class RequiredFile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fieldValue: this.props.fieldValue,
      isInvalid: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()

    let fieldValue = React.findDOMNode(this.refs[this.props.fieldName]).value

    this.setState({
      fieldValue: fieldValue,
      isInvalid: (fieldValue === "")
    })
  }

  render() {
    if (this.state.isInvalid) {
      var errors = <span>Is required.</span>
    }

    return(
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          id={this.props.fieldName}
          type={this.props.fieldType}
          value={this.state.fieldValue}
          ref={this.props.fieldName}
          onChange={this.handleChange}/>
        <label
          className="mdl-textfield__label"
          htmlFor={this.props.fieldName}>
          {this.props.children}
        </label>
        <span
          className="mdl-textfield__error">
          {errors}
        </span>
      </div>
    )
  }
}

RequiredFile.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  fieldType: React.PropTypes.string.isRequired
}
