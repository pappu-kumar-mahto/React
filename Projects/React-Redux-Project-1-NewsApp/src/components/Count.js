import React from "react";
import { Button } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import { incrementCounter, decrementCounter } from "../redux/count/action";

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
  return (
    <div className="text-center">
      <h1 className="display-1">{count}</h1>
      <Button className="btn-dark" onClick={() => dispatch(incrementCounter())}>
        Increment
      </Button>
      <br />
      <br />
      <Button className="btn-dark" onClick={() => dispatch(incrementCounter(5))}>
        Increment5
      </Button>
      <br />
      <br />
      <Button variant="dark" onClick={() => dispatch(decrementCounter())}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter
/*
import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/count/action";

const Counter = ({ count, incrementCounter, decrementCounter }) => {
  return (
    <div className="text-center">
      <h1 className="display-1">{count}</h1>
      <Button className="btn-dark" onClick={() => incrementCounter()}>
        Increment
      </Button>
      <br />
      <br />
      <Button className="btn-dark" onClick={() => incrementCounter(5)}>
        Increment5
      </Button>
      <br />
      <br />
      <Button variant="dark" onClick={() => decrementCounter()}>
        Decrement
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: (payload) => dispatch(incrementCounter(payload)),
    decrementCounter: (payload) => dispatch(decrementCounter(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/