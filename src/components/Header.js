import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		const activeStyle = { textDecoration: 'underline' };
		return (
			<header>
				<img src={logo} alt={'Kasa logo'}></img>
				<nav>
					<NavLink to='/' exact activeStyle={activeStyle}>
						Accueil
					</NavLink>
					<NavLink to='/about' activeStyle={activeStyle}>
						A propos
					</NavLink>
				</nav>
			</header>
		);
	}
}

export default Header;
