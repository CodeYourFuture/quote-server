import React, { useEffect, useState } from 'react';
import './quotes.css';

const Quotes = () => {
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
			<ul>
				{quotes.length === 0 ? null : quotes.map((x, index) => <li key={index}>{x.quote}</li>)}
			</ul>
		</div>
	)
};

export default Quotes;