import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUSES = Object.freeze({
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error",
})

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setNews(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const { setNews, setStatus } = newsSlice.actions
export default newsSlice.reducer

export function fetchNews() {
    return async function fetchNewsThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?apiKey=c56aa996e4654733a6af9434349a647d&country=in')
            dispatch(setNews(response.data.articles))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}