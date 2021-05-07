import React, { Component } from 'react';
import '../styles/ImageBanner.css';

export class ImageBanner extends Component {
	render() {
		let className = 'image-banner';
		if (this.props.class === 'home-banner') {
			className += ' home-banner';
		}

		return (
			<div className={className}>
				<img src={this.props.image} alt={this.props.alt} />
				{this.props.text && <p>{this.props.text}</p>}
			</div>
		);
	}
}

export default ImageBanner;
