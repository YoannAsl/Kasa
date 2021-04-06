/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Collapse } from '../components/Collapse';
import { Tag } from '../components/Tag';
import '../styles/Apartment.css';
import { Carousel } from '../components/Carousel';
import { StarsContainer } from '../components/StarsContainer';

export class Apartment extends Component {
	ratings = React.createRef();
	displayRating() {
		const maxRating = 5;
		const container = document.querySelector('.rating-container');
		const test = this.ratings.current;
		console.log(test);
		for (let i = 0; i < maxRating; i++) {
			container.append('<div>test</div>');
		}
	}

	render() {
		const {
			title,
			location,
			tags,
			host,
			rating,
			description,
			equipments,
			pictures,
		} = this.props.apartment[0];

		return (
			<main>
				<Carousel pictures={pictures} />
				<section className='apartment-infos'>
					<h1 className='apartment-title'>{title}</h1>
					<p className='apartment-location'>{location}</p>
					<ul className='tags'>
						{tags.map((tag) => {
							return <Tag content={tag} key={tag} />;
						})}
					</ul>
				</section>
				<section>
					<div className='host-infos'>
						<p>{host.name}</p>
						<img src={host.picture} alt={`Photo de ${host.name}`} />
					</div>
					{/* for i < rating */}
					<StarsContainer rating={rating} />
				</section>
				<div className='collapse-container'>
					<Collapse title={'Description'} content={description} />
					<Collapse
						title={'Équipements'}
						content={equipments.map((eq) => {
							return <li key={eq}>{eq}</li>;
						})}
					/>
				</div>
			</main>
		);
	}
}

export default Apartment;
