/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import '../styles/Apartment.css';
import data from '../assets/data.json';
import { Redirect } from 'react-router-dom';

import { Collapse } from '../components/Collapse';
import { Tag } from '../components/Tag';
import { Carousel } from '../components/Carousel';
import { Rating } from '../components/Rating';

export class Apartment extends Component {
	render() {
		if (!data.some((apt) => apt.id === this.props.match.params.id)) {
			return <Redirect to='/404' />;
		}
		const apartment = data.filter(
			(apt) => apt.id === this.props.match.params.id
		);

		const {
			title,
			location,
			tags,
			host,
			rating,
			description,
			equipments,
			pictures,
		} = apartment[0];

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
					<Rating rating={rating} />
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
