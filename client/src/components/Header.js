import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header>
			<h3>Quote App</h3>
			<h1 className='handwritten'>This is my handwritten quote of the day</h1>
			<div className='quote-action-container'>
				<button>Get random quote</button>
			</div>
		</header>
	)
}

export default Header;