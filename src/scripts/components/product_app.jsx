import React from "react";
import ProductStore from "../stores/product_store";
import Sidebar from "./sidebar";

class ProductApp extends React.Component {

  constructor() {
    super();
    this.onOpenSidebar = this.onOpenSidebar.bind(this);
  }

  getInitialState() {
  }

  componentDidMount() {
    ProductStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(getStateFromStores());
  }

  onOpenSidebar() {
    this.refs.sidebar.toggle();
  }

  render() {
    return (
      <div>
        <sidebar ref="sidebar" />
      </div>
    );
  }
};

function getStateFromStores() {
  return {
    products: ProductStore.get()
  };
}

export default ProductApp;
