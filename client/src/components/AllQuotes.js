import React, { useEffect, useState } from 'react';
import './AllQuotes.css';
import QuoteComponent from './QuoteComponent.js';

const AllQuotes = () => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		fetch('/quotes')
			.then(res => res.json())
			.then(data => {
				setQuotes(data);
			})
			.catch(err => console.error(err));
	}, [])

	return (
		<div>
			<form>
				<label>Search for quotes</label>
				<input type='search' id='search' name='search' placeholder='Start typing...' />
			</form>
			{quotes.length === 0 ? null : quotes.map(elem => <QuoteComponent quote={elem} />)}
		</div>
	)
};

export default AllQuotes;