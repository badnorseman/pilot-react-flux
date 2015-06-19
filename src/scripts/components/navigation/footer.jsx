import React from "react";

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <footer className="page-footer hide">
        <div className="row">
          <div className="col s12 flow-text">
            <ul>
              <liv>
                <i className="mdi-action-info-outline"></i>
              </liv>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <h5>Add some text...</h5>
        </div>
        </footer>
      </div>
    )
  }
};
