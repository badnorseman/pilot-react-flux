import React from "react";
var ResponsiveReactGridLayout = require("react-grid-layout").Responsive;

export default class extends React.Component {
  render() {
    let breakpoints = {xxs:0, xs:480, sm:768, md:996, lg:1200}
    let columns = {xxs:2, xs:4, sm:6, md:10, lg:12}

    return(
      <ResponsiveReactGridLayout
        breakpoints={breakpoints}
        cols={columns}
        rowHeight={100}>
        <div key={1}/>
        <div key={2}/>
        <div key={3}/>
        <div key={4}/>
        <div key={5}/>
        <div key={6}/>
        <div key={7}/>
        <div key={8}/>
        <div key={9}/>
      </ResponsiveReactGridLayout>
    )
  }
};
