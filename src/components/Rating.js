import React, { Component } from 'react';
import greystar from '../assets/grey-star.svg';
import redstar from '../assets/red-star.svg';
import '../styles/Rating.css';

class Rating extends Component {
	render() {
		let stars = [];
		const maxRating = 5;

		for (let i = 0; i < maxRating; i++) {
			this.props.rating > i
				? stars.push({ link: redstar, alt: 'Red star' })
				: stars.push({ link: greystar, alt: 'Grey star' });
		}

		return (
			<div className='rating'>
				{stars.map((star, index) => {
					return <img src={star.link} key={index} alt={star.alt} />;
				})}
			</div>
		);
	}
}

export default Rating;
