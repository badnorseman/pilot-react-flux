import React from "react";
import { Link, RouteHandler } from "react-router";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";
import Footer from "./footer";

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      user: {}
    }
    this.handleLogout = this.handleLogout.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount() {
    this.setState({
      isLoggedIn: AuthStore.isLoggedIn(),
      user: AuthStore.getUser()
    })
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange)
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  onChange() {
    this.setState({
      isLoggedIn: AuthStore.isLoggedIn(),
      user: AuthStore.getUser()
    })
  }

  handleLogout() {
    AuthActions.logout()
   }

  render() {
    return(
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
                  <a className="mdl-navigation__link" onClick={this.handleLogout} href="#">Log Out</a>
                ) : (
                  <Link className="mdl-navigation__link" to="/login">Log In</Link>
                )}
                <Link className="mdl-navigation__link" to="/signup">Sign Up</Link>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">FitBird</span>
            <nav className="mdl-navigation">
              <Link className="mdl-navigation__link" to="/products">Discover</Link>
              <Link className="mdl-navigation__link" to="/payments">My Account</Link>
              {this.state.isLoggedIn ? (
                <a className="mdl-navigation__link" onClick={this.handleLogout} href="#">Log Out</a>
              ) : (
                <Link to="/login">Log In</Link>
              )}
              <Link className="mdl-navigation__link" to="/signup">Sign Up</Link>
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
