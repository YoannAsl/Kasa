/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Collapse } from '../components/Collapse';
import { Tag } from '../components/Tag';
import '../styles/Apartment.css';
import { Carousel } from '../components/Carousel';

export class Apartment extends Component {
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
					<h1>{title}</h1>
					<p>{location}</p>
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
					<div>{rating}</div>
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
