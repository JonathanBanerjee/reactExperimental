import React, { Component } from "react";
import Link from "./Link";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <Link
          text={"Github"}
          link={"https://www.github.com/jonathanbanerjee"}
        />
        <Link
          text={"LinkedIn"}
          link={"https://www.linkedin.com/in/jonathanbanerjee"}
        />
      </nav>
    );
  }
}

export default Nav;
