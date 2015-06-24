// Fix titleCase function
import React from "react";

export default class extends React.Component {
  constructor(props) {
    super()
    this.state = {isEmpty: false}
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp() {
    let fieldValue = React.findDOMNode(this.refs[this.props.fieldName]).value
    this.setState({isEmpty: (fieldValue === "")})
  }

  render() {
    let errors = ""

    if (this.state.isEmpty) {
      errors = <span>Is required.</span>
    }

    let fieldTitle = titleCase(this.props.fieldName)

    return(
      <div>
        <input id={this.props.fieldName} type={this.props.fieldType} ref={this.props.fieldName} onKeyUp={this.handleKeyUp}/>
        <label htmlFor={this.props.fieldName}>{fieldTitle}</label>
        {errors}
      </div>
    )
  }
};

function titleCase(str) {
  return str.toUpperCase()
};
