import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './Footer.css';

export class Footer extends Component {
	render() {
		return (
			<footer>
				<img src={logo} alt={'Kasa logo'}></img>
				<p>© 2020 Kasa. All rights reserved</p>
			</footer>
		);
	}
}

export default Footer;
