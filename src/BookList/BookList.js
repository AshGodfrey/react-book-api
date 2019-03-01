import React, { Component } from 'react';
import './BookList.css';
import BookCard from '../BookCard/BookCard';

export default class BookList extends Component {
	render() {
		let bookCards = this.props.books.map(book => (
					<BookCard
						key={book.id}
						Check bookcard
						title={book.volumeInfo.title}
						image={book.volumeInfo.imageLinks.thumbnail}
						authors={book.volumeInfo.authors}
						description={book.volumeInfo.description}
					/>
				))
		return (
			<div className="book-list">
				{bookCards}
			</div>
		);
	}
}
BookList.defaultProps = { books: [] };