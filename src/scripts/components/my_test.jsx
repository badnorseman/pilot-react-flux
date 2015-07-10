import React from "react";

export default class MyTest extends React.Component {
  render() {
    return(
      <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            className="mdl-textfield__input"
            id="myTest"
            type="text"/>
          <label
            className="mdl-textfield__label"
            htmlFor="myTest">
            Test
          </label>
        </div>
      </div>
    )
  }
}
