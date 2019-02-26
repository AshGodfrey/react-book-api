import React, { Component } from 'react';
import './SearchArea.css';

import Search from '../Search/Search';
import SecondSearchArea from '../SecondSearchArea/SecondSearchArea';

export default class SearchArea extends Component {
	formHandler(e) {
		e.preventDefault();
		this.props.submitHandler();
	}
	getUserInput(userInput) {
		this.props.inputHandler(userInput);
	}
	changeSelection(e) {
		this.props.changeHandler(e.target.name, e.target.value);
	}
	render() {
		return (
			<form onSubmit={e => this.formHandler(e)}>
				<Search inputHandler={input => this.getUserInput(input)} />
				<SecondSearchArea changeHandler={e => this.changeSelection(e)} />
			</form>
		);
	}
}
