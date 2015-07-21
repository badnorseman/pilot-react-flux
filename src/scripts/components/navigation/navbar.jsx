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
                <Link to="/products">FitBird</Link>
              </span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                <div className="mdl-navigation__link">
                  {this.state.isLoggedIn ? (
                    <a onClick={this.handleLogout} href="#">Log Out</a>
                  ) : (
                    <Link to="/login">Log In</Link>
                  )}
                </div>
                <div className="mdl-navigation__link">
                  <Link to="/signup">Sign Up</Link>
                </div>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">FitBird</span>
            <nav className="mdl-navigation">
              <div className="mdl-navigation__link">
                <Link to="/products">Discover</Link>
              </div>
              <div className="mdl-navigation__link">
                <Link to="/payments">My Account</Link>
              </div>
              <div className="mdl-navigation__link">
                {this.state.isLoggedIn ? (
                  <a onClick={this.handleLogout} href="#">Log Out</a>
                ) : (
                  <Link to="/login">Log In</Link>
                )}
              </div>
              <div className="mdl-navigation__link">
                <Link to="/signup">Sign Up</Link>
              </div>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
              <RouteHandler {...this.props}/>
              <Footer/>
            </div>
          </main>
        </div>
      </div>
    )
  }
}
