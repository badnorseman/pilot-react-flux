import React from "react";
import Braintree from "braintree-web";

export default class Dropin extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let clientToken = this.props.clientToken

    Braintree.setup(
      clientToken,
      "dropin", {
        container: "dropin-container",
        onPaymentMethodReceived: this.props.onPaymentMethodReceived,
        onError: this.props.onError,
        onReady: this.props.onReady
      }
    )
  }

  render() {
    return(
      <div>
        <form>
          <div id="dropin-container"></div>
        </form>
      </div>
    )
  }
}
