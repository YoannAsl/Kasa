import React, { Component } from 'react';
import '../styles/Apartment.scss';
import data from '../assets/data.json';
import { Redirect } from 'react-router-dom';

import Collapse from '../components/Collapse';
import Tag from '../components/Tag';
import Carousel from '../components/Carousel';
import Rating from '../components/Rating';
import Host from '../components/Host';

class ApartmentPage extends Component {
	render() {
		// Redirects to 404 if wrong id
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
				<div className={'infos'}>
					<section className='apartment-infos'>
						<h1 className='apartment-title'>{title}</h1>
						<p className='apartment-location'>{location}</p>
						<ul className='tags'>
							{tags.map((tag) => (
								<Tag content={tag} key={tag} />
							))}
						</ul>
					</section>

					<div className={'host-infos'}>
						<Host name={host.name} picture={host.picture} />
						<Rating rating={rating} />
					</div>
				</div>
				<div className='collapse-container'>
					<Collapse title={'Description'} content={description} />
					<Collapse
						title={'Équipements'}
						content={equipments.map((eq) => (
							<li key={eq}>{eq}</li>
						))}
					/>
				</div>
			</main>
		);
	}
}

export default ApartmentPage;
