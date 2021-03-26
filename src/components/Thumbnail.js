import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './thumbnail.css';

export class Thumbnail extends Component {
	render() {
		const { cover, title } = this.props.apartment;
		return (
			<li className='thumbnail' style={{ listStyle: `none` }}>
				<img src={cover} alt={`Photo of ` + title}></img>
				<p>{title}</p>
			</li>
		);
	}
}

// Proptypes
Thumbnail.propTypes = {
	apartment: PropTypes.object.isRequired,
};

export default Thumbnail;
