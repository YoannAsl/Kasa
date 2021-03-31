import React, { Component } from 'react';
import { ThumbnailsContainer } from '../components/ThumbnailsContainer.js';

export class Home extends Component {
	render() {
		return (
			<main>
				<ThumbnailsContainer apartments={this.props.apartments} />
			</main>
		);
	}
}

export default Home;
