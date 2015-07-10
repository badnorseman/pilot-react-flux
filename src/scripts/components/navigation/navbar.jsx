import React from "react";
import { Link } from "react-router";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";

export default class Navbar extends React.Component {
  constructor(context) {
    super(context)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
    this.onChange = this.onChange.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      isLoggedIn: AuthStore.isLoggedIn(),
      user: AuthStore.getUser()
    })
  }

  handleLogout() {
    AuthActions.logout()
    this.context.router.transitionTo("/products")
  }

  render() {
    return(
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--overlay-drawer-button">
          <header className="mdl-layout__header mdl-layout__header--waterfall">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">FitBird</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                <div className="mdl-navigation__link">
                  <Link to="/products"><i className="material-icons">home</i></Link>
                </div>
                <div>
                  {this.state.isLoggedIn ? (
                    <i className="mdl-navigation__link material-icons" onClick={this.handleLogout}>lock</i>
                  ) : (
                    <div className="mdl-navigation__link">
                      <Link to="/login"><i className="material-icons">unlock</i></Link>
                    </div>
                  )}
                </div>
                <div className="mdl-navigation__link">
                  <Link to="/signup"><i className="material-icons">person</i></Link>
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
              <div>
                {this.state.isLoggedIn ? (
                  <div className="mdl-navigation__link">
                    <Link to="/logout">Log Out</Link>
                  </div>
                ) : (
                  <div className="mdl-navigation__link">
                    <Link to="/login"></Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
            </div>
          </main>
        </div>
      </div>
    )
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.func.isRequired
}
