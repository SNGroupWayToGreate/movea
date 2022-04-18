import React from 'react'
import './Main.css'
import banner from '../../images/Banner.jpg'
import play from '../../images/play.svg'
import { useSelector } from 'react-redux'

export default function Main() {

	const movies = useSelector(state => state.movies.moviesData)

	const moviesListElem = movies?.map(movie => {
		return (
			<div key={movie.id} className="movies__item item">
				<div className="item__banner ibg">
					<img src={movie?.movieImageUrl} alt="" />
				</div>
				<div className="item__footer">
					<div className="item__play">
						<div className="item__icon">
							<img src={play} alt="" />
						</div>
						<div className="item__info">
							<div className="item__title">
								{movie?.title}
							</div>
							<div className="item__date">
								{movie?.release_date}
							</div>
						</div>
					</div>
					<div className="item__duration">
						{movie?.duration}
					</div>
				</div>
			</div>
		)
	})
	return (<>
		<main className='main'>
			<section className="announcement">
				<div className="announcement__content">
					<div className="announcement__banner">
						<img src={banner} alt="" />
					</div>
				</div>
			</section>
			<section className="movies">
				<div className="movies__title">
					<div className="movies__desription">
						Continue Watching
					</div>
					<div className="movies__watching">
						<span className="movies__quantity">4</span>
						<span className="movies__txt">Movies</span>
					</div>
				</div>
				<div className="movies__list">
					{moviesListElem}
				</div>
			</section>
		</main>
	</>
	)
}
