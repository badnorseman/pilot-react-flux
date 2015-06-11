var React = require("react");
var ProductStore = require("../stores/product_store");
var ProductActions = require("../actions/product_actions");
var Sidebar = require("./sidebar");

function getProductState() {
  return {
    products: ProductStore.getProducts(),
    errors: ProductStore.getErrors()
  };
}

module.exports = React.createClass({

  getInitialState: function() {
    return getProductState();
  },

  componentDidMount: function() {
    ProductStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState(getProductState);
  },

  render: function() {
    return (
      <div>
        <Sidebar />
        <div>
          {this.state.errors}
          <List items={this.state.products} />
          <RefreshList />
          <AddItem />
        </div>
      </div>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.items.map(function(item, index) {
          return <Item item={item} key={index} />
        })}
      </ul>
    );
  }
});

var Item = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.item.name}
        {this.props.item.description}
        <RemoveItem id={this.props.item.id} />
      </li>
    )
  }
});

var AddItem = React.createClass({
  onClick: function() {
    var record = {
      name: "name",
      description: "description"
    };
    ProductActions.add(record);
  },
  render: function() {
    return (
      <button onClick={this.onClick}>Add </button>
    )
  }
});

var RemoveItem = React.createClass({
  onClick: function() {
    var id = this.props.id;
    ProductActions.remove(id);
  },
  render: function() {
    return (
      <button onClick={this.onClick}>Remove </button>
    )
  }
});

var RefreshList = React.createClass({
  onClick: function() {
    ProductActions.list();
  },
  render: function() {
    return (
      <button onClick={this.onClick}>List </button>
    );
  }
});
