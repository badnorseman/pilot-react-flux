"use strict";
import React from "react";
import AuthActions from "../../actions/auth_actions";
import Button from "../button";

export default class extends React.Component {
  constructor(props) {
    super(props)
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick() {
    AuthActions.oauth(this.props.provider)
  }

  render() {
    return (
      <Button name={this.props.provider} onClick={this._handleClick}/>
    )
  }
}
