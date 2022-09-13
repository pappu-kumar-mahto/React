import axios from 'axios'
export const FETCH_NEWS_REQUESTED = 'FETCH_NEWS_REQUESTED';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNewsRequested = () => ({
    type: FETCH_NEWS_REQUESTED
})
export const fetchNewsSuccess = (newsList) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: newsList
        
})
export const fetchNewsFailure = (error) => ({
    type: FETCH_NEWS_FAILURE,
    payload: error
 }) 

export const fetchNews = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchNewsRequested())
            let res = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=c56aa996e4654733a6af9434349a647d&country=in")
            dispatch(fetchNewsSuccess(res.data.articles))
        } catch (error) {
            dispatch(fetchNewsFailure(error.message))
        }
    }
}