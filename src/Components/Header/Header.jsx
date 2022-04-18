import React from 'react'
import search from '../../images/Search.svg'
import dots from '../../images/Dots.svg'
import circle from '../../images/Circle.svg'
import './Header.css'

export default function Header() {
	return (
		<header className='header'>
			<div className="header__container">
				<div className="header__body">
					<div className="header__logo">
						<a href="#">MOVEA</a>
					</div>
					<nav className="header__menu">
						<ul className="header__list">
							<li className="header__item">
								<a className="header__link">Movies</a>
							</li>
							<li className="header__item">
								<a className="header__link">TV shows</a>
							</li>
							<li className="header__item">
								<a className="header__link">Animations</a>
							</li>
						</ul>
					</nav>
					<div className="header__buttons">
						<div className="header__search">
							<img src={search} alt="btn" />
						</div>
						<div className="header__circle">
							<img src={circle} alt="btn" />
						</div>
						<div className="header__dots">
							<img src={dots} alt="btn" />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
