import React from "react";
import Auth from "./auth";

export default class Login extends React.Component {

  contextTypes: {
    router: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    var { router } = this.context;
    var nextPath = router.getCurrentQuery().nextPath;
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    Auth.login(email, password, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true });
      if (nextPath) {
        router.replaceWith(nextPath);
      } else {
        router.replaceWith("dashboard");
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="Email" defaultValue="agent.smith@matrix.com"/></label>
        <label><input ref="password" placeholder="Password" defaultValue="dammit"/></label><br/>
        <button type="submit">login</button>
        {this.state.error}
      </form>
    );
  }
};
