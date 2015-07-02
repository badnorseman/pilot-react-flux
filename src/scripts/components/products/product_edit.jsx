import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import RequiredField from "../authentication/required_field";
import UploadFile from "./upload_file";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {errors: []}
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    ProductStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      errors: this.state.errors = ProductStore.getErrors()
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let name = this.refs.name.state.fieldValue
    let description = this.refs.description.state.fieldValue

    if (name && description) {
      ProductActions.edit(
        this.props.params.id, {
        product: {
          name: name,
          description: description
        }
      })
      this.context.router.transitionTo("products")
    }
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
                <RequiredField fieldName="name" fieldType="text" ref="name">
                Name</RequiredField>
              </div>
              <div className="col s6 input-field">
                <RequiredField fieldName="description" fieldType="text" ref="description">
                Description</RequiredField>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <Link to="products" className="btn waves-effect waves-light">Cancel</Link>
              </div>
              <div className="col s6">
                <button className="btn waves-effect waves-light" type="submit">Save</button>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col s12">
              <UploadFile id={this.props.params.id} ref="file"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

EditProduct.contextTypes = {
  router: React.PropTypes.func.isRequired
}
