import React, { useEffect, useState } from 'react';
import './AllQuotes.css';
import QuoteComponent from './QuoteComponent.js';

const AllQuotes = () => {
	const [quotes, setQuotes] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		fetch('/quotes')
			.then(res => res.json())
			.then(data => {
				setQuotes(data);
			})
			.catch(err => console.error(err));
	}, [])

	const handleSearch = (event) => setSearchValue(event.target.value);
	
	const filteredQuotes = quotes.filter(quote => quote.quote.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<div className='all-quotes-container'>
			<form>
				<label>Search for quotes</label>
				<input type='search' id='search' name='search' placeholder='Start typing...' onChange={handleSearch} />
			</form>
			<div className='test'>{filteredQuotes.map((quote, index) => <QuoteComponent quote={quote} key={index} />)}</div>
		</div>
	)
};

export default AllQuotes;