import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import styled from "styled-components";

// "tag template literal"
const MyButton = styled.button`
  background: red;
  font-size: 50px;
  .poop {
    font-size: 125px;
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>
          Click Me
          <span className="poop">💩</span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
