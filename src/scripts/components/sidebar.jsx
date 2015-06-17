import React from "react";
import Router from "react-router";
import Mui from "material-ui";

class Sidebar extends React.Component {
  constructor(user) {
      let menuItems = getMenuItems(user)

      super()
      this.state = {menuItems: menuItems}
      this.toggle = this.toggle.bind(this)
      this.onItemClicked = this.onItemClicked.bind(this)
      this.onHeaderClick = this.onHeaderClick.bind(this)
      this.toggle = this.toggle.bind(this)
    }

    toggle() {
      this.refs.leftNav.toggle()
    }

    handleItemClicked(e, key, payload) {
      this.context.router.transitionTo(payload.route)
      this.refs.leftNav.close()
    }

    handleHeaderClick() {
      this.context.router.transitionTo("root")
      this.refs.leftNav.close()
    }

    headerStyles() {
      return {
        cursor: "pointer",
        fontSize: "2.3em",
        color: "white",
        paddingLeft: "24px",
        paddingTop: "0.5em",
        paddingBottom: "0.5em",
        marginBottom: "8px"
      }
    }

    render() {
      var header = (
        <div className="color-palette" onClick={this.handleHeaderClick}>
          <h1 style={this.headerStyles()} className="mui-font-style-headline indigo-500">
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
            onChange={this.handleItemClicked}
            menuItems={this.state.menuItems} />
        </div>
      )
    }
}

Sidebar.contextTypes = {
  router: React.PropTypes.func
}

function getMenuItems(user) {
  let menuItems;

  if (user) {
    menuItems = [
    {
      route: "logout",
      text: "Log Out",
      disabled: true
    }, {
      route: "discover",
      text: "Discover",
      disabled: true
    }, {
      route: "how-it-works",
      text: "How It Works",
      disabled: true
    }, {
      route: "join-as-trainer",
      text: "Join as Trainer",
      disabled: true
    }]
  } else {
    menuItems = [
    {
      route: "signup",
      text: "Sign Up"
    }, {
      route: "login",
      text: "Log In",
    }, {
      route: "discover",
      text: "Discover",
      disabled: true
    }, {
      route: "how-it-works",
      text: "How It Works",
      disabled: true
    }, {
      route: "join-as-trainer",
      text: "Join as Trainer",
      disabled: true
    }];
  }
  return menuItems
}

export default Sidebar;
