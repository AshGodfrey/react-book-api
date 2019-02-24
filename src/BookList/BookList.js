import React, { Component } from 'react';
import './BookList.css';
import BookCard from '../BookCard/BookCard';

export default class BookList extends Component {
	render() {
		return (
			<div>
				{this.props.books.map(book => (
					<BookCard
						key={book.id}
						title={book.volumeInfo.title}
						image={book.volumeInfo.imageLinks.thumbnail}
						authors={book.volumeInfo.authors}
						description={book.volumeInfo.description}
					/>
				))}
			</div>
		);
	}
}
BookList.defaultProps = { books: [] };