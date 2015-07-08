import React from "react";
import { Link } from "react-router";
import ProductActions from "../../actions/product_actions";
import ProductStore from "../../stores/product_store";
import RequiredField from "../required_field";
import UploadFile from "../upload_file";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      product: ProductStore.getProduct(this.props.params.id)
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    ProductStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      errors: ProductStore.getErrors(),
      product: ProductStore.getProduct(this.props.params.id)
    })
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
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            {this.state.errors}
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <form onSubmit={this.handleSubmit}>
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                  <RequiredField fieldName="name" fieldType="text" fieldValue={name} ref="name">
                  Name</RequiredField>
                </div>
                <div className="mdl-cell mdl-cell--6-col">
                  <RequiredField fieldName="description" fieldType="text" fieldValue={description} ref="description">
                  Description</RequiredField>
                </div>
              </div>
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col">
                  <UploadFile id={this.props.params.id} ref="file"/>
                </div>
              </div>
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                  <Link
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    to="/products">Cancel
                  </Link>
                </div>
                <div className="mdl-cell mdl-cell--6-col">
                  <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    type="submit">Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

EditProduct.contextTypes = { router: React.PropTypes.func.isRequired }
