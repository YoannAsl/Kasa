import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import '../styles/ThumbnailsContainer.css';

export class ThumbnailsContainer extends Component {
	render() {
		return (
			<div className='thumbnail-container'>
				{this.props.apartments.map((apartment) => {
					return (
						<Thumbnail key={apartment.id} apartment={apartment} />
					);
				})}
			</div>
		);
	}
}

export default ThumbnailsContainer;
