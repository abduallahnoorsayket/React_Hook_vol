import React, { Component } from "react";

export default class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 5,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>count {this.state.counter}</button>
      </div>
    );
  }
}
