import React from "react";
// var ResponsiveReactGridLayout = require("react-grid-layout").Responsive;
import { Responsive as Grid} from "react-grid-layout";

export default class extends React.Component {
  render() {
    let style = {
      border: "solid",
      minHeight: "200px",
      minWidth: "200px"
    }

    return(
      <Grid
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
          <div style={style} key={1} />
          <div style={style} key={2} />
          <div style={style} key={3} />
      </Grid>
    )
  }
}
