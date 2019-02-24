import React, { Component } from 'react';
import './Main.css';

import Search from '../Search/Search';
import BookList from '../BookList/BookList';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInputs: {
				q: '',
				printType: 'all',
				filter: 'none'
			},
			error: null,
			books: {}
		};
	}

	createUrl() {
		const endPoint = 'https://www.googleapis.com/books/v1/volumes';
		const key = 'key=AIzaSyCFSW5dPZJMqvFKnN1KLbemN2oz2Miy50s';
		const params = Object.keys(this.state.userInputs)
			.map(key => `${key}=${this.state.userInputs[key]}`)
			.filter(param => param !== 'filter=none');
		params.push(key);
		const paramString = params.join('&');
		return `${endPoint}?${paramString}`;
	}

	getData() {
		fetch(this.createUrl())
			.then(res => {
				if (!res.ok)
					throw new Error('Something went wrong. Please try again later.');
				return res.json();
			})
			.then(data => this.setState({ books: data.items }))
			.catch(err => this.setState({ error: err.message }));
	}
	setUserInput(input) {
		const state = Object.assign({}, this.state);
		state.userInputs.q = input.split(' ').join('+');
		this.setState(state);
	}
	setFilter(key, value) {
		const userInputs = Object.assign({}, this.state.userInputs);
		userInputs[key] = value;
		this.setState({ userInputs });
	}
	render() {
		return (
			<main>
				<Search
					submitHandler={e => this.getData(e)}
					inputHandler={input => this.setUserInput(input)}
					changeHandler={(key, value) => {
						this.setFilter(key, value);
					}}
				/>
				{Object.entries(this.state.books).length === 0 &&
				this.state.books.constructor === Object ? (
					''
				) : (
					<BookList books={this.state.books} />
				)}
			</main>
		);
	}
}