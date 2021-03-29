/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Collapse } from '../components/Collapse';
import { Tag } from '../components/Tag';
import './Apartment.css';

export class Apartment extends Component {
	render() {
		return (
			<div>
				<section className='apartment-infos'>
					<h1>{this.props.apartment[0].title}</h1>
					<p>{this.props.apartment[0].location}</p>
					<ul className='tags'>
						{this.props.apartment[0].tags.map((tag) => {
							return <Tag content={tag} />;
						})}
					</ul>
				</section>
				<section>
					<div className='host-infos'>
						<p>{this.props.apartment[0].host.name}</p>
						<img
							src={this.props.apartment[0].host.picture}
							alt={`Photo de ${this.props.apartment[0].host.name}`}
						/>
					</div>
					<div>{this.props.apartment[0].rating}</div>
				</section>
				<div style={{ display: 'flex' }}>
					<Collapse
						title={'Description'}
						content={this.props.apartment[0].description}
						style={{ color: 'blue' }}
					/>
					<Collapse
						title={'Équipements'}
						content={this.props.apartment[0].equipments.map(
							(eq) => {
								return <li>{eq}</li>;
							}
						)}
						style={{ width: '50%' }}
					/>
				</div>
			</div>
		);
	}
}

export default Apartment;
