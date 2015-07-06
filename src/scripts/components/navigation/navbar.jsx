// Move menu items into own class
// Fix toggleSidebar without jQuery
import React from "react";
import { Link } from "react-router";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";

export default class Navbar extends React.Component {
  constructor(context) {
    super(context)
    this.state = {
      loggedIn: false,
      user: {}
    }
    this.onChange = this.onChange.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      loggedIn: AuthStore.loggedIn(),
      user: AuthStore.getUser()
    })
  }

  handleLogout() {
    AuthActions.logout()
    this.context.router.transitionTo("/products")
  }

  toggleSidebar() {
    $(".button-collapse").sideNav("")
  }

  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">FitBird</a>
            <a href="#" data-activates="nav-mobile" className="button-collapse" onClick={this.toggleSidebar}>
              <i className="mdi-navigation-menu"></i></a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/products">
                  <i className="mdi-action-home"></i></Link>
              </li>
              <li>
                <Link to="/payment_plans">
                  <i className="mdi-action-payment"></i></Link>
              </li>
              <li>
                {this.state.loggedIn ? (
                  <i className="mdi-action-lock-outline" onClick={this.handleLogout}></i>
                ) : (
                  <Link to="/login">
                    <i className="mdi-action-lock-open"></i></Link>
                )}
              </li>
              <li>
                <Link to="/signup">
                  <i className="mdi-social-person-outline"></i></Link>
              </li>
            </ul>
            <ul className="side-nav" id="nav-mobile">
              <li><Link to="/products">Discover</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li>
                {this.state.loggedIn ? (
                  <Link to="/logout">Log Out</Link>
                ) : (
                  <Link to="/login">Log In</Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.func.isRequired
}
