import React from "react"
var ResponsiveReactGridLayout = require("react-grid-layout").Responsive
import Mui from "material-ui"

let Paper = Mui.Paper

export default class extends React.Component {
  render() {
    let breakpoints = {xxs:0, xs:480, sm:768, md:996, lg:1200}
    let columns = {xxs:2, xs:4, sm:6, md:10, lg:12}

    return(
      <ResponsiveReactGridLayout
        breakpoints={breakpoints}
        cols={columns}
        rowHeight={100}>
        <Paper zDepth={3} rounded={false} key={1} />
        <Paper zDepth={3} rounded={false} key={2} />
        <Paper zDepth={3} rounded={false} key={3} />
        <Paper zDepth={3} rounded={false} key={4} />
        <Paper zDepth={3} rounded={false} key={5} />
        <Paper zDepth={3} rounded={false} key={6} />
        <Paper zDepth={3} rounded={false} key={7} />
        <Paper zDepth={3} rounded={false} key={8} />
        <Paper zDepth={3} rounded={false} key={9} />
      </ResponsiveReactGridLayout>
    )
  }
}
