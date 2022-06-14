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
      this.setState((prevCount)=>({
      counter: prevCount.counter + 1,
    }));
  };
  decreaseCounter = () => {
    this.setState({
    counter: this.state.counter - 1,
  });
  };
  
  incrementfiveCounter = () => { 
    this.increaseCounter()
    this.increaseCounter()
    this.increaseCounter()
    this.increaseCounter()
    this.increaseCounter()
  }
  render() {
    const { counter } = this.state;
    return (
      <>
        <h1>Counter</h1>
        <span className="counter">{counter}</span>
        <br />
        <button onClick={this.incrementfiveCounter}>Increase Counter</button>
        <br/>
        <button onClick={this.decreaseCounter}>Decrease Counter</button>
      </>
    );
  }
}

export default CounterComponent;
