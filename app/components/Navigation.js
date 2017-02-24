import React from 'react';
import {Link, IndexLink} from 'react-router';

const Navigation = () => {
	return (
		<nav className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">
						React Time App
					</li>
					<li>
						<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
					</li>
					<li>
						<Link to="/countdown" activeClassName="active-link">Countdown</Link>
					</li>
				</ul>
			</div>

			<div className="top-bar-right">
				<span className="text-container">
					Created by <a href="http://jahattox.com" target="_blank">James Austin Hattox</a>
				</span>
			</div>
		</nav>
	);
}

export default Navigation;