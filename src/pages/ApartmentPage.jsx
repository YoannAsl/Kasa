import React, { Component } from 'react';
import '../styles/Apartment.scss';
import { Redirect } from 'react-router-dom';

import Dropdown from '../components/Dropdown';
import Tag from '../components/Tag';
import Carousel from '../components/Carousel';
import Rating from '../components/Rating';
import Host from '../components/Host';

class ApartmentPage extends Component {
	render() {
		// Redirects to 404 if wrong id
		if (
			!this.props.apartments.some(
				(apt) => apt.id === this.props.match.params.id
			)
		) {
			return <Redirect to='/404' />;
		}

		const apartment = this.props.apartments.filter(
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
							{tags.map((tag, idx) => (
								<Tag content={tag} key={idx} />
							))}
						</ul>
					</section>

					<div className={'host-infos'}>
						<Host name={host.name} picture={host.picture} />
						<Rating rating={rating} />
					</div>
				</div>
				<div className='dropdown-container'>
					<Dropdown title={'Description'} content={description} />
					<Dropdown
						title={'Équipements'}
						content={equipments.map((eq, idx) => (
							<li key={idx}>{eq}</li>
						))}
					/>
				</div>
			</main>
		);
	}
}

export default ApartmentPage;
