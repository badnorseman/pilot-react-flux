import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick()
    return
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
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
          type="button"
          onClick={this.handleClick}>
          Click
        </button>
      </div>
    )
  }
}
