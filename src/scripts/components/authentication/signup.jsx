// Add callback from server to display any error
// Can error be passed down from products.jsx?
// Form could be own component
// Add client-side validation
// Can Login and Signup forms be one?
// Add flux actions for Signup and callback
// Add avatar, paperclick functionality
import React from "react"
import { Link } from "react-router";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";

export default class Signup extends React.Component {
  constructor(context) {
    super(context)
    this.state = {errors: []}
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      errors: this.state.errors = AuthStore.getErrors()
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    var email = React.findDOMNode(this.refs.email).value
    var password = React.findDOMNode(this.refs.password).value
  }

  render() {
    return(
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12">
                {this.state.errors}
              </div>
            </div>
            <div className="row">
              <div className="col s6 input-field">
                <input id="email" type="text" ref="email"/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="col s6 input-field">
                <input id="password" type="text" ref="password"/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <Link to="Products" className="waves-effect waves-light btn">Cancel</Link>
              </div>
              <div className="col s6">
                <button className="btn waves-effect waves-light" type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Signup.contextTypes = {
  router: React.PropTypes.func.isRequired
};
