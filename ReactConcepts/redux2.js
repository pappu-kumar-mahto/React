const { createStore, applyMiddleware, combineReducers } = require("redux");
const { createLogger } = require("redux-logger");

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const DISPLAY = "DISPLAY";
const HIDE = "HIDE";

const incrementCounter = (count = 1) => ({
  type: INCREMENT_COUNTER,
  payload: count,
});
const decrementCounter = (count = 1) => ({
  type: DECREMENT_COUNTER,
  payload: count,
});
const display = () => ({
  type: DISPLAY,
});
const hide = () => ({
  type: HIDE,
});

let countInitialState = {
  count: 0,
};
let showInitialState = {
  show: false,
};

const countReducerFunction = (state = countInitialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
const showReducerFunction = (state = showInitialState, action) => {
  switch (action.type) {
    case DISPLAY:
      return {
        ...state,
        show: true,
      };
    case HIDE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: countReducerFunction,
  show: showReducerFunction,
});

const store = createStore(rootReducer, applyMiddleware(createLogger()));

const unsubscribe = store.subscribe(() => {});

store.dispatch(incrementCounter(7));

store.dispatch(decrementCounter());
store.dispatch(display());
store.dispatch(hide());

unsubscribe();
