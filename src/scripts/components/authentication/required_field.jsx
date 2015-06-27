import React from "react";

export default class RequiredField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isInvalid: false}
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp() {
    let fieldValue = React.findDOMNode(this.refs[this.props.fieldName]).value.trim();
    this.setState({
      fieldValue: fieldValue,
      isInvalid: (fieldValue === "")
    })
  }

  render() {
    let errors = ""

    if (this.state.isInvalid) {
      errors = <span>Is required.</span>
    }

    return(
      <div>
        <input
          id={this.props.fieldName}
          type={this.props.fieldType}
          ref={this.props.fieldName}
          onKeyUp={this.handleKeyUp}/>
        <label htmlFor={this.props.fieldName}>
          {this.props.children}</label>
        {errors}
      </div>
    )
  }
};
