import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		const activeStyle = { textDecoration: 'underline' };
		return (
			<header>
				<img src={logo} alt={'Kasa logo'}></img>
				<nav>
					<NavLink to='/kasa' exact activeStyle={activeStyle}>
						Accueil
					</NavLink>
					<NavLink to='/kasa/about' activeStyle={activeStyle}>
						A propos
					</NavLink>
				</nav>
			</header>
		);
	}
}

export default Header;
