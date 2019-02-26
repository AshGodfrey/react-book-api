import React from 'react';
import './Search.css';

export default function Search(props) {
	return (
		<div className="search">
			<label htmlFor="search">Search:</label>
			<input
				type="input"
				id="search"
				name="search"
				onChange={e => props.inputHandler(e.target.value)}
			/>
			<input type="submit" value="Search" />
		</div>
	);
}