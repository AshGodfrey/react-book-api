import React from 'react';
import './Search.css';

export default function Search(props) {
	return (
		<div>
			<label className="search" htmlFor="search">Search:</label>
			<input
				type="text"
				id="search"
				name="search"
				onChange={e => props.inputHandler(e.target.value)}
			/>
			<input type="submit" value="Search" />
		</div>
	);
}