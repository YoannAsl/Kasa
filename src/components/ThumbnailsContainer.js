import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import PropTypes from 'prop-types';
import '../styles/ThumbnailsContainer.css';

export class ThumbnailsContainer extends Component {
	render() {
		return (
			<ul id='thumbnail-container'>
				{this.props.apartments.map((apartment) => {
					return (
						<Thumbnail key={apartment.id} apartment={apartment} />
					);
				})}
			</ul>
		);
	}
}

// Proptypes
ThumbnailsContainer.propTypes = {
	apartments: PropTypes.array.isRequired,
};

export default ThumbnailsContainer;
