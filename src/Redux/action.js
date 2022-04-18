import { SET_COMMENTS, SET_MOVIES_DATA } from "./type";

export const setMoviesData = (data) => ({
	type: SET_MOVIES_DATA,
	data
})
export const setCommets = (comments) => ({
	type: SET_COMMENTS,
	comments
})

