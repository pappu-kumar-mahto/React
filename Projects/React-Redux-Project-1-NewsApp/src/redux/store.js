import  { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { countReducer } from './count/reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import { newsReducer } from './newsList/reducer.js'
import reduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    counter: countReducer,
    news: newsReducer
})

let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk, createLogger()))
)

export default store