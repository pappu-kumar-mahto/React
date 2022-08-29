const { createStore, applyMiddleware } = require("redux");
const { createLogger} = require('redux-logger')

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const incrementCounter = (count = 1) => ({
  type: INCREMENT_COUNTER,
  payload: count,
});
const decrementCounter = (count = 1) => ({
  type: DECREMENT_COUNTER,
  payload: count,
});

let initialState = {
  count: 0,
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducerFunction, applyMiddleware(createLogger()))
// store.subscribe(() => { })
const unsubscribe = store.subscribe(() => { })

store.dispatch(incrementCounter(7))
// console.log(store.getState())
store.dispatch(decrementCounter())
// console.log(store.getState())

unsubscribe()