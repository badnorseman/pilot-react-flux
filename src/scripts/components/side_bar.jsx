import React from 'react';
import mui from 'material-ui';
import Router from "react-router";

class SideBar extends React.Component {
  constructor(props) {
      var menuItems;
      if (props.user) {
        menuItems = [
        {
          route: 'log-off',
          text: 'Log Off',
          disabled: true
        }, {
          route: 'discover',
          text: 'Discover',
          disabled: true
        }, {
          route: 'how-it-works',
          text: 'How It Works',
          disabled: true
        }, {
          route: 'join-as-trainer',
          text: 'Join As Trainer',
          disabled: true
        }]
      } else {
        menuItems = [
        {
          route: 'sign-up',
          text: 'Sign Up'
        }, {
          route: 'log-in',
          text: 'Log In',
        }, {
          route: 'discover',
          text: 'Discover',
          disabled: true
        }, {
          route: 'how-it-works',
          text: 'How It Works',
          disabled: true
        }, {
          route: 'join-as-trainer',
          text: 'Join As Trainer',
          disabled: true
        }];
      }

      super();
      this.state = {menuItems: menuItems}
      this.toggle = this.toggle.bind(this);
      this.onItemClicked = this.onItemClicked.bind(this);
      this.onHeaderClick = this.onHeaderClick.bind(this);
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.refs.leftNav.toggle();
    }

    onItemClicked(e, key, payload) {
      this.context.router.transitionTo(payload.route);
      this.refs.leftNav.close();
    }

    onHeaderClick() {
      this.context.router.transitionTo('root');
      this.refs.leftNav.close();
    }

    headerStyles() {
      return {
        cursor: 'pointer',
        fontSize: '2.3em',
        color: 'white',
        paddingLeft: '24px',
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        marginBottom: '8px'
      };
    }

    render() {
      var header = (
        <div className="color-palette"  onClick={this.onHeaderClick}>
          <h1 style={this.headerStyles()} className="mui-font-style-headline indigo-500">Fitbird</h1>
        </div>
      );

      return (
        <div>
          <mui.LeftNav ref="leftNav" docked={false} header={header} isInitiallyOpen={false} onChange={this.onItemClicked} menuItems={this.state.menuItems} />
        </div>
      );
    }
};

SideBar.contextTypes = {
  router: React.PropTypes.func
};

export default SideBar;
