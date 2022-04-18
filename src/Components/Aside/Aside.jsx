import React from 'react'
import { useSelector } from 'react-redux'
import Form from '../Form/Form'
import './Aside.css'

export default function Eside() {
	const comments = useSelector(state => state.movies.comments)
	const commentsElem = comments?.map(comment => {
		return (
			<div key={comment.id} className="comments__comment">
				<div className="comments__username">
					{comment?.username}
				</div>
				<div className="comments__text">
					{comment?.comment_msg}
				</div>
			</div>
		)
	})
	return (
		<aside className="aside">
			<div className="comments">
				<div className="comments__title">
					Comments
				</div>
				<div className="comments__list">
					{commentsElem}
				</div>
			</div>
			<Form />
		</aside>
	)
}
