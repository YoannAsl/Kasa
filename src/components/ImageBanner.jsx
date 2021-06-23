import React, { Component } from 'react';
import '../styles/ImageBanner.scss';

class ImageBanner extends Component {
	render() {
		let className = 'image-banner';
		if (this.props.class) {
			className += ` ${this.props.class}`;
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
