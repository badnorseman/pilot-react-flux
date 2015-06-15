import React from "react";
var ResponsiveReactGridLayout = require("react-grid-layout").Responsive;
import Item from "./product_grid_item";

export default class extends React.Component {
  render() {
    let style = {
      border: "solid",
      minHeight: "50px",
      minWidth: "50px"
    }

    let items = this.props.items.map(function(item, index) {
      return(
        <Item item={item} key={index} />
      )
    })
    let breakpoints = {xxs:0, xs:480, sm:768, md:996, lg:1200}
    let columns = {xxs:2, xs:4, sm:6, md:10, lg:12}
    let props = {minH:1, minW:3, maxH:3, maxW:6, static:true}

    return(
      <ResponsiveReactGridLayout breakpoints={breakpoints} cols={columns}>
        <div style={style} key={1} props={props} />
        <div style={style} key={2} props={props} />
        <div style={style} key={3} props={props} />
        <div style={style} key={4} props={props} />
        <div style={style} key={5} props={props} />
        <div style={style} key={6} props={props} />
        <div style={style} key={7} props={props} />
        <div style={style} key={8} props={props} />
        <div style={style} key={9} props={props} />

      </ResponsiveReactGridLayout>
    )
  }
}
