import React, { Component } from "react";
import "./CounterComponent.css"
class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increaseCounter = () => {
      console.log(this.state.counter)
      this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <>
        <h1>Counter</h1>
        <span className="counter">{counter}</span>
        <br />
        <button onClick={this.increaseCounter}>Increase Counter</button>
      </>
    );
  }
}

export default CounterComponent;
