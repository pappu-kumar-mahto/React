import {FETCH_NEWS_REQUESTED, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE} from './action.js'
let initialState = {
    loading: false,
    newsList: [],
    error:""
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_NEWS_REQUESTED:
          return {
              ...state,
              loading: true,
          }
      case FETCH_NEWS_SUCCESS:
          return {
              ...state,
              newsList: action.payload,
              loading:false
          }
      case FETCH_NEWS_FAILURE:
          return {
              ...state,
              error: action.payload,
              loading:false
          }
    default:
      return state;
  }
};