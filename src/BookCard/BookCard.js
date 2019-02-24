import React from 'react';
import './BookCard.css';

export default function BookCard(props) {
	return (
		<div className="book-card">
			<h2>{props.title}</h2>
			<div>
				<img src={props.image} alt={`Book cover for ${props.title}`} />
				<p>
					{props.authors.length === 1 ? 'Author: ' : 'Authors: '}
					{props.authors.join(', ')}
				</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
}