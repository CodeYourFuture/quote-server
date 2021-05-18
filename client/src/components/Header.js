import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header>
			<h1>Quote App</h1>
			<div className='quote-action-container'>
				<button>Get all quotes</button>
				<button>Get random quote</button>
				<form>
					<label>Search for quotes</label>
					<input type='search' id='search' name='search' placeholder='Start typing...' />
				</form>
			</div>
		</header>
	)
}

export default Header;