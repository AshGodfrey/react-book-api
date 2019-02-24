import React from 'react';
import './SecondSearchArea.css';

export default function SecondSearchArea(props) {
	return (
		<div>
			<label htmlFor="printType">Print Type: </label>
			<select
				id="printType"
				name="printType"
				onChange={e => props.changeHandler(e)}
			>
				<option value="all">All</option>
				<option value="books">Books</option>
				<option value="magazines">Magazines</option>
			</select>
			<label htmlFor="filter">Book Type: </label>
			<select id="filter" name="filter" onChange={e => props.changeHandler(e)}>
				<option value="none">No Filter</option>
				<option value="partial">Partial</option>
				<option value="full">Full</option>
				<option value="free-ebooks">Free eBooks</option>
				<option value="paid-ebooks">Paid eBooks</option>
				<option value="ebooks">eBooks</option>
			</select>
		</div>
	);
}