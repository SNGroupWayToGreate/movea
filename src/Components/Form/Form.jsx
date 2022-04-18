import React from 'react'
import './Form.css'

export default function Form() {
	return (
		<div className='form'>
			<input className="form__input" type="text" placeholder='Username' />
			<textarea className="form__textarea" placeholder='Comment ...'></textarea>
			<button className="form__button" type='submit'>POST</button>
		</div>
	)
}
