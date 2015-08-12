"use strict";
import React, { Component, PropTypes } from "react";
import * as AuthActions from "../../actions/auth_actions";
import Button from "../button";

export default class Oauth extends Component {
  static propTypes = {
    provider: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
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
