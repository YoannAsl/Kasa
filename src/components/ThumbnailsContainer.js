import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import PropTypes from 'prop-types';

export class ThumbnailsContainer extends Component {
	render() {
		return (
			<ul
				id='thumbnailContainer'
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
					width: 1500,
				}}
			>
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
