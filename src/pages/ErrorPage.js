import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorPage.scss';

class ErrorPage extends Component {
	render() {
		return (
			<main className='error-page'>
				<p className='error-404'>404</p>
				<p className='error-text'>
					Oups ! La page que vous demandez n'existe pas.
				</p>
				<Link to='/'>Retourner sur la page d’accueil</Link>
			</main>
		);
	}
}

export default ErrorPage;
