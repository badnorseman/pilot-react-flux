import React from "react";
import AuthActions from "../../actions/auth_actions";

export default class Logout extends React.Component {
  constructor(context) {
    super(context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    AuthActions.logout()
    this.context.router.transitionTo("/products")
  }

  render() {
    return (
      <div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
          onClick={this.handleClick}>
          Logout
        </button>
      </div>
    )
  }
}

Logout.contextTypes = {
  router: React.PropTypes.func.isRequired
}
