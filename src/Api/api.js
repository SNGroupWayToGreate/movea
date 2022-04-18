import axios from "axios";

const instanse = axios.create({
	baseURL: 'https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/'
})

export const Api = {
	getMoviesData() {
		return instanse.get(`movies`)
			.then(response => {
				console.log(response.data)
				return response.data
			})
	},
	getMovieComments(movieId) {
		return instanse.get(`movies/${movieId}/comments`)
		.then(response => {
			console.log(response.data)
			return response.data
		})
	}
}