import React, { Component } from "react";

export default class Page extends Component {
  render() {
    return (
      <div>
        <p>Hey! I'm the Page component!</p>
        {this.props.children}
      </div>
    );
  }
}
