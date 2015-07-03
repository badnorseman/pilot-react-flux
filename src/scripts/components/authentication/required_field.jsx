import React from "react";

export default class RequiredField extends React.Component {
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
    var value = this.state.fieldValue

    return(
      <div>
        <input
          id={this.props.fieldName}
          type={this.props.fieldType}
          value={value}
          ref={this.props.fieldName}
          onChange={this.handleChange}/>
        <label htmlFor={this.props.fieldName}>
          {this.props.children}</label>
        {errors}
      </div>
    )
  }
}
