import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ImageBanner.css';

export class ImageBanner extends Component {
	render() {
		return (
			<div className='image-banner'>
				<img src={this.props.image} alt={this.props.alt} />
			</div>
		);
	}
}

export default ImageBanner;
