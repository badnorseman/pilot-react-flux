import React from "react";
import AuthActions from "../../actions/auth_actions";

export default class Logout extends React.Component {
  constructor(context) {
    super(context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    AuthActions.logout()
    this.context.router.transitionTo("products")
  }

  render() {
    return (
      <div>
        <button className="btn waves-effect waves-light" onClick={this.handleClick}>Logout</button>
      </div>
    )
  }
}

Logout.contextTypes = {
  router: React.PropTypes.func.isRequired
}
