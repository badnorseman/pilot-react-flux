var React = require("react");
var ProductStore = require("../../stores/product_store");
var ProductActions = require("../../actions/product_actions");
var Login = require("../login");
var List = require("./product_list");

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
        <Login />
        <RefreshList />
        <div>
          <div>
            {this.state.errors}
          </div>
          <List items={this.state.products} />
          <AddItem />
        </div>
      </div>
    );
  }
});

var AddItem = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var name = React.findDOMNode(this.refs.name).value;
    var description = React.findDOMNode(this.refs.description).value;

    if (name && description) {
      var record = {
        product : {
          name: name,
          description: description
        }
      }
      ProductActions.add(record);
      React.findDOMNode(this.refs.name).value = "";
      React.findDOMNode(this.refs.description).value = "";
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="name" />
          <input type="text" ref="description" />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
});

var RefreshList = React.createClass({
  handleClick: function() {
    ProductActions.list();
  },
  render: function() {
    return (
      <button onClick={this.handleClick}>List </button>
    );
  }
});
