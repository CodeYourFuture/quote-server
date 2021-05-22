import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ setRanCount, ranCount }) => {
	return (
		<header>
			<h3 className='app-name'>Quote App</h3>
			<h1 className='handwritten'>This is my handwritten quote of the day</h1>
			<div className='quote-action-container'>
				<Link to='/quotes' style={{ textDecoration: 'none' }}>
					<button className='btn btn-info m-5 p-2 random-button'>Get All Quotes</button>
				</Link>
				<Link to='/quotes/random' style={{ textDecoration: 'none' }} >
					<button className='btn btn-info m-5 p-2 random-button' onClick={() => setRanCount(ranCount++)}>Get random quote</button>
				</Link>
			</div>
		</header >
	)
}

export default Header;