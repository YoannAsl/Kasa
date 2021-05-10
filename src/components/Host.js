/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import '../styles/Host.css';

class Host extends Component {
	render() {
		const { name, picture } = this.props;
		const firstName = name.split(' ')[0];
		const lastName = name.split(' ')[1];

		return (
			<div className='host'>
				<p>
					<span>{firstName}</span>
					<span>{lastName}</span>
				</p>
				<img src={picture} alt={`Photo de ${name}`} />
			</div>
		);
	}
}

export default Host;
