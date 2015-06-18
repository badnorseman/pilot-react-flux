import React from "react";

export default class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">FitBird</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="">Log in</a></li>
              <li><a href="">Log out</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};
