import  { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import {countReducer} from './count/reducer.js'

let store = createStore(countReducer, applyMiddleware(createLogger()))

export default store