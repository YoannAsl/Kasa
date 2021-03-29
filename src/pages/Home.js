import React, { Component } from 'react';
import { ThumbnailsContainer } from '../components/ThumbnailsContainer.js';

export class Home extends Component {
	render() {
		return (
			<div>
				<ThumbnailsContainer apartments={this.props.apartments} />
			</div>
		);
	}
}

export default Home;
