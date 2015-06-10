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

function listOnClick() {
  ProductActions.list1();
}

function addOnClick() {
  var record = {
    name: "name",
    description: "description"
  };
  ProductActions.add1(record);
}

function removeOnClick() {
  var id = 1;
  ProductActions.remove1(id);
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
          <div>
            <List items={this.state.products} />
          </div>
          <button onClick={listOnClick}>List </button>
          <button onClick={addOnClick}>Add </button>
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
        {this.props.item.id}
        {this.props.item.name}
        {this.props.item.description}
        <button onClick={removeOnClick}>Remove </button>
      </li>
    )
  }
});
