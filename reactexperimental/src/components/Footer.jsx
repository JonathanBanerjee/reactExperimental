import React, { Component } from "react";
import Nav from "./footerComponents/Nav";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer>&#169; Jonathan Banerjee</footer>
        <Nav />{" "}
      </>
    );
  }
}

export default Footer;
