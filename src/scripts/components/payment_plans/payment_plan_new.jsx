import React from "react";
import { Link } from "react-router";
import Braintree from "braintree-web";
import ProductActions from "../../actions/auth_actions";
// import ProductStore from "../../stores/product_store";
import RequiredField from "../required_field";

export default class NewPaymentPlan extends React.Component {
  constructor(context) {
    super(context)
    this.state = {errors: []}
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // ProductStore.addChangeListener(this.onChange)

    let clientToken = "someTokenHere"

    Braintree.setup(
      clientToken,
      "dropin", {
      container: "dropin-container"
      }
    )
  }

  componentWillUnmount() {
    // ProductStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      // errors: ProductStore.getErrors()
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let name = this.refs.name.state.fieldValue

    if (name) {
      // ProductActions.create({
      //   name: name
      // })
      // this.context.router.transitionTo("/products")
    }
  }

  render() {
    return(
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div id="dropin-container"></div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <RequiredField
                  fieldName="name"
                  fieldType="text"
                  ref="name">
                  Name
                </RequiredField>
                <Link
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  to="/products">
                  Cancel
                </Link>
                <div className="divider"></div>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  type="submit">
                  Add
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
