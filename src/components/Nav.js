import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
	return (
		<nav>
			<ul>
				<li>
					<Link className="clickedLink" to="/">Home</Link>
				</li>
				<li>
					<Link className="clickedLink" to="/About">About</Link>
				</li>
				<li>
					<Link className="clickedLink" to="/Blog">Blog</Link>
				</li>
				<li>
					<Link className="clickedLink" to="/Projects">Projects</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav;