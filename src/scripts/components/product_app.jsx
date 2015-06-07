import React from "react";
import ProductStore from "./stores/product_store";
import Sidebar from "./sidebar";

function getStateFromStores() {
  return {
    products: ProductStore.get()
  };
}

class ProductApp extends React.Component {

  constructor() {
    super();
    this.onOpenSidebar = this.onOpenSidebar.bind(this);
  }

  getInitialState: function() {
  }

  componentDidMount: function() {
    ProductStore.addChangeListener(this.onChange);
  }

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this.onChange);
  }

  onChange: function() {
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

export default ProductApp;
