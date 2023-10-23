import React, { Component } from "react";

class Main extends Component {
  state = { count: 0, whoWroteThis: "Joe Bloggs" };
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  multiply = () => {
    this.setState({ count: this.state.count * 2 });
  };

  divide = () => {
    this.setState({ count: this.state.count / 2 });
  };

  author = () => {
    this.setState({ whoWroteThis: "Jonathan Banerjee" });
  };

  render() {
    return (
      <main>
        <section>
          <h3>Section 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nam
            omnis temporibus atque recusandae obcaecati architecto, blanditiis
            ab dolor cupiditate minus alias adipisci a? Nemo magni odio nostrum
            hic voluptatibus.
          </p>
        </section>
        <section>
          <h3>Section 2</h3>
          <p>{this.state.whoWroteThis}</p>
          <button onClick={this.author}>Who Wrote this?</button>
        </section>

        <section>
          <div>
            <p>{this.state.count}</p>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
            <button onClick={this.multiply}>x</button>
            <button onClick={this.divide}>/</button>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
