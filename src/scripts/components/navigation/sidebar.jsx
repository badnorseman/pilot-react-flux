import React from "react"
import Mui from "material-ui"

let ThemeManager = new Mui.Styles.ThemeManager()
let LeftNav = Mui.LeftNav

export default class Sidebar extends React.Component {
  constructor(props) {
    let menuItems = getMenuItems(props)

    super()
    this.state = {menuItems: menuItems}
    this.toggle = this.toggle.bind(this)
    this.handleHeaderClick = this.handleHeaderClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  toggle() {
    this.refs.leftNav.toggle()
  }

  handleHeaderClick() {
    this.refs.leftNav.close()
  }

  handleItemClick(e, key, payload) {
    this.refs.leftNav.close()
  }

  style() {
    return {
      cursor: "pointer"
    }
  }

  render() {
    var header = (
      <div onClick={this.handleHeaderClick}>
        <h1 style={this.style()}>
          FitBird
        </h1>
      </div>
    )

    return (
      <div>
        <Mui.LeftNav
          ref="leftNav"
          docked={false}
          header={header}
          isInitiallyOpen={false}
          onChange={this.handleItemClick}
          menuItems={this.state.menuItems}/>
      </div>
    )
  }
}

Sidebar.contextTypes = {
  router: React.PropTypes.func
}

Sidebar.childContextTypes = {
  muiTheme: React.PropTypes.object
}

function getMenuItems(props) {
  let menuItems

  if (props.user) {
    menuItems = [
    { route: "logout", text: "Log Out", disabled: true },
    { route: "discover", text: "Discover", disabled: true }]
  } else {
    menuItems = [
    { route: "signup", text: "Sign Up" },
    { route: "login", text: "Log In" },
    { route: "discover", text: "Discover", disabled: true }]
  }
  return menuItems
}
