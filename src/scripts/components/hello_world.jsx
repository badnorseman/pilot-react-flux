import React from "react";
import Mui from "material-ui";

var Dialog = Mui.Dialog;

class HelloWorld extends React.Component {

  render() {

    var someActions = [
      { text: 'Submit', ref: 'submit' }
    ];

    return(
      <div>
        <Dialog
          title="Hello World"
          actions={someActions}
          actionFocus="submit"
          modal={true}>
        </Dialog>
      </div>
    );
  }
}

export default HelloWorld;
