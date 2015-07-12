import React from "react";
import AuthActions from "../../actions/auth_actions";

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    AuthActions.oauth(this.props.provider)
  }

  render() {
    return(
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        onClick={this.handleClick}>
        {this.props.provider}
      </button>
    )
  }
}
