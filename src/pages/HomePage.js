import React, { Component } from 'react';
import image from '../assets/home-banner-image.jpg';

import '../styles/Home.css';
import ImageBanner from '../components/ImageBanner';
import Thumbnail from '../components/Thumbnail';

class HomePage extends Component {
	render() {
		return (
			<main>
				<ImageBanner
					image={image}
					alt={
						'green and brown mountain beside body of water during daytime'
					}
					text={'Chez vous, partout et ailleurs'}
					class={'home-banner'}
				/>
				<div className='thumbnails-container'>
					{this.props.apartments.map((apartment) => {
						return (
							<Thumbnail
								key={apartment.id}
								apartment={apartment}
							/>
						);
					})}
				</div>
			</main>
		);
	}
}

export default HomePage;
