"use strict";
import React, { Component } from "react";
import { Link, RouteHandler } from "react-router";
import * as AuthActions from "../actions/auth_actions";
import AuthStore from "../stores/auth_store";
import Footer from "./footer";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    };
    this._handleLogout = this._handleLogout.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AuthStore.addChangeListener(this._onChange)
    this.setState(this._getStateFromStores())
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange)
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  _getStateFromStores() {
    return {
      isLoggedIn: AuthStore.isLoggedIn(),
      user: AuthStore.getUser()
    }
  }

  _onChange() {
    this.setState(this._getStateFromStores())
  }

  _handleLogout() {
    AuthActions.logout()
   }

  render() {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--overlay-drawer-button">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                <Link className="mdl-navigation__link" to="/products">FitBird</Link>
              </span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                {this.state.isLoggedIn ? (
                  <a className="mdl-navigation__link" onClick={this._handleLogout} href="#">Log Out</a>
                ) : (
                  <Link className="mdl-navigation__link" to="/login">Log In</Link>
                )}
                {!this.state.isLoggedIn && <Link className="mdl-navigation__link" to="/signup">Sign Up</Link>}
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">FitBird</span>
            <nav className="mdl-navigation">
              <Link className="mdl-navigation__link" to="/products">Discover</Link>
              {this.state.isLoggedIn && <Link className="mdl-navigation__link" to="/transactions">My Account</Link>}
              {this.state.isLoggedIn ? (
                <a className="mdl-navigation__link" onClick={this._handleLogout} href="#">Log Out</a>
              ) : (
                <Link className="mdl-navigation__link" to="/login">Log In</Link>
              )}
              {!this.state.isLoggedIn && <Link className="mdl-navigation__link" to="/signup">Sign Up</Link>}
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
              <RouteHandler {...this.props}/>
            </div>
            <div className="mdl-layout-spacer"></div>
            <Footer/>
          </main>
        </div>
      </div>
    )
  }
}
