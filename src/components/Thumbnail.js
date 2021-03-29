import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Thumbnail.css';
import { Link } from 'react-router-dom';

export class Thumbnail extends Component {
	render() {
		const { cover, title, id } = this.props.apartment;
		return (
			<Link to={`/apartments/${id}`}>
				<li className='thumbnail' style={{ listStyle: `none` }}>
					<img src={cover} alt={`Photo of ` + title}></img>
					<p>{title}</p>
				</li>
			</Link>
		);
	}
}

// Proptypes
Thumbnail.propTypes = {
	apartment: PropTypes.object.isRequired,
};

export default Thumbnail;
