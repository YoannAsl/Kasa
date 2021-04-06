import React, { Component } from 'react';
import greystar from '../assets/grey-star.svg';
import redstar from '../assets/red-star.svg';

export class StarsContainer extends Component {
	render() {
		let stars = [];
		for (let i = 0; i < 5; i++) {
			this.props.rating > i
				? stars.push({ link: redstar, id: i, alt: 'Red star' })
				: stars.push({ link: greystar, id: i, alt: 'Greystar' });
		}
		return (
			<div className='stars-container'>
				{stars.map((star) => {
					return <img src={star.link} key={star.id} alt={star.alt} />;
				})}
			</div>
		);
	}
}

export default StarsContainer;
