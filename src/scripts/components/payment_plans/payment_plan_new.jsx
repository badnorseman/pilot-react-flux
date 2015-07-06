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
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12">
              {this.state.errors}
            </div>
          </div>
          <div className="row">
            <div className="col s12" id="dropin-container">
            </div>
          </div>
          <div className="row">
            <div className="col s12 input-field">
              <RequiredField fieldName="name" fieldType="text" ref="name">
              Name</RequiredField>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <Link to="/products" className="btn waves-effect waves-light">Cancel</Link>
            </div>
            <div className="col s6">
              <button className="btn waves-effect waves-light" type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

NewPaymentPlan.contextTypes = {
  router: React.PropTypes.func.isRequired
}
