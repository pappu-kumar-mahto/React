import { configureStore } from "@reduxjs/toolkit";

import newsReducer from './NewsSlice'

const store = configureStore({
    reducer: {
        news: newsReducer
    }
})

export default store