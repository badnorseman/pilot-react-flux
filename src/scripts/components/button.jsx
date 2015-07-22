import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick()
  }

  render() {
    return(
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        onClick={this.handleClick}>
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}
