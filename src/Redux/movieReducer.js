import { Api } from "../Api/api"
import { setCommets, setMoviesData } from "./action"
import { SET_COMMENTS, SET_MOVIES_DATA } from "./type"

const initialState = {
	moviesData: [],
	comments: []
}

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_MOVIES_DATA:
			return { ...state, moviesData: [...action.data] }
		case SET_COMMENTS:
			return { ...state, comments: [...action.comments] }

		default:
			return state
	}
}

export const getMovies = () => {
	return (dispatch) => {
		Api.getMoviesData()
			.then(data => {
				dispatch(setMoviesData(data))
			})
	}
}
export const getComments = (id) => {
	return (dispatch) => {
		Api.getMovieComments(id)
			.then((data) => {
				dispatch(setCommets(data))
			})
	}
}