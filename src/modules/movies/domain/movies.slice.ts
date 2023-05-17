import { createSlice } from "@reduxjs/toolkit"
import { moviesReducers } from "./movies.reducers"
import { initialState } from "./movies.state"

export const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: moviesReducers,
})
