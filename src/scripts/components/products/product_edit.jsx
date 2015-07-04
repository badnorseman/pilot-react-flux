import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import RequiredField from "../authentication/required_field";
import UploadFile from "./upload_file";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: ProductStore.getProduct(this.props.params.id)
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    console.log("constructor ", this.state)
  }

  componentDidMount() {
    ProductStore.addChangeListener(this.onChange)
    console.log("componentDidMount ", this.state)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange)
    console.log("componentWillUnmount ", this.state)
  }

  onChange() {
    this.setState({
      product: ProductStore.getProduct(this.props.params.id)
    })
    console.log("onChange ", this.state)
  }

  handleSubmit(e) {
    e.preventDefault()

    let description = this.refs.description.state.fieldValue
    let name = this.refs.name.state.fieldValue

    if (description && name) {
      ProductActions.edit(
        this.props.params.id, {
        product: {
          description: description,
          name: name
        }
      })
      this.context.router.transitionTo("/products")
    }
  }

  render() {
    let description = this.state.product.description
    let name = this.state.product.name

    return(
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s6 input-field">
                <RequiredField fieldName="name" fieldType="text" fieldValue={name} ref="name">
                Name</RequiredField>
              </div>
              <div className="col s6 input-field">
                <RequiredField fieldName="description" fieldType="text" fieldValue={description} ref="description">
                Description</RequiredField>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <Link to="/products" className="btn waves-effect waves-light">Cancel</Link>
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

EditProduct.contextTypes = { router: React.PropTypes.func.isRequired }
