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
        <RefreshList />
        <div>
          {this.state.errors}
          <List items={this.state.products} />
          <AddItem />
        </div>
      </div>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.items.map(function(item, index) {
          return <Item item={item} key={index} />
        })}
      </div>
    );
  }
});

var Item = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.item.name}
        {this.props.item.description}
        <RemoveItem id={this.props.item.id} />
      </div>
    )
  }
});

var AddItem = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var name = React.findDOMNode(this.refs.name).value;
    var description = React.findDOMNode(this.refs.description).value;

    if (name && description) {
      var record = {
        name: name,
        description: description
      }
      ProductActions.add(record);
      React.findDOMNode(this.refs.name).value = "";
      React.findDOMNode(this.refs.description).value = "";
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="name" />
        <input type="text" ref="description" />
        <button type="submit">Add</button>
      </form>
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
