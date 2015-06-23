import React from "react";
import AuthActions from "../../actions/auth_actions";

export default class extends React.Component {
  constructor(props) {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    AuthActions.oauth(this.props.provider)
  }

  render() {
    return(
      <button className="btn waves-effect waves-light" onClick={this.handleClick}>{this.props.provider}</button>
    )
  }
};
