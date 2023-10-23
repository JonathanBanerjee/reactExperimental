import React, { Component } from "react";
import Link from "./Link";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <Link text={"Home"} />
        <Link text={"About"} />
        <Link text={"Contact"} />
        <Link text={"Other"} />
      </nav>
    );
  }
}

export default Nav;
