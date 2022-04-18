import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Api } from './Api/api'
import './App.css'
import Eside from './Components/Aside/Aside'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { setMoviesData } from './Redux/action'
import { getComments, getMovies } from './Redux/movieReducer'

export default function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getMovies())
		dispatch(getComments(1))
		//Api.getMovieComments(1)
	}, [])
	return (
		<div className='wrapper'>
			<Header />
			<div className="content">
				<Main />
				<Eside />
			</div>
		</div>
	)
}
