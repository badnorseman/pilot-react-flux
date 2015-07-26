// Enable to pass in validators e.g. required, number, amount etc.
// Each validators would have own pattern and each pattern world have an error message.
import React from "react";

export default class InputFile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fieldValue: this.props.fieldValue
    }
    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange(e) {
    e.preventDefault()

    let fieldValue = React.findDOMNode(this.refs[this.props.fieldName]).value

    this.setState({
      fieldValue: fieldValue
    })
  }

  render() {
    return(
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          id={this.props.fieldName}
          pattern={this.props.fieldPattern}
          type={this.props.fieldType}
          value={this.state.fieldValue}
          ref={this.props.fieldName}
          onChange={this._handleChange}/>
        <label
          className="mdl-textfield__label"
          htmlFor={this.props.fieldName}>
          {this.props.children}
        </label>
        <span
          className="mdl-textfield__error">
          {this.props.fieldError}
        </span>
      </div>
    )
  }
}

InputFile.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  fieldType: React.PropTypes.string.isRequired
}
