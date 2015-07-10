import React from "react";
import { Link } from "react-router";
import Braintree from "braintree-web";

export default class NewPaymentPlan extends React.Component {
  constructor(context) {
    super(context)
    this.state = {errors: []}
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let clientToken = "someTokenHere"

    Braintree.setup(
      clientToken,
      "dropin", {
      container: "dropin-container"
      }
    )
  }

  componentWillUnmount() {
  }

  onChange() {
    this.setState({
      errors: {}
    })
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return(
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div id="dropin-container"></div>
                <Link
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  to="/products">
                  Cancel
                </Link>
                <div className="divider"></div>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

NewPaymentPlan.contextTypes = {
  router: React.PropTypes.func.isRequired
}
