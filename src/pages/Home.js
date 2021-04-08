import React, { Component } from 'react';
import image from '../assets/home-banner-image.jpg';

import { ThumbnailsContainer } from '../components/ThumbnailsContainer.js';
import ImageBanner from '../components/ImageBanner';

export class Home extends Component {
	render() {
		return (
			<main>
				<ImageBanner
					image={image}
					alt={
						'green and brown mountain beside body of water during daytime'
					}
				/>
				<ThumbnailsContainer apartments={this.props.apartments} />
			</main>
		);
	}
}

export default Home;
