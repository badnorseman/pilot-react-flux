import React from "react";

export default class MyTest extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            className="mdl-textfield__input"
            id={this.props.id}
            type={this.props.type}/>
          <label
            className="mdl-textfield__label"
            htmlFor={this.props.id}>
            Test
          </label>
        </div>
      </div>
    )
  }
}
