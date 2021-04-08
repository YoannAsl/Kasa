import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Thumbnail.css';
import { Link } from 'react-router-dom';

export class Thumbnail extends Component {
	render() {
		const { cover, title, id } = this.props.apartment;
		return (
			<Link to={`/apartments/${id}`}>
				<article className='thumbnail'>
					<img src={cover} alt={`Photo of ` + title}></img>
					<p>{title}</p>
				</article>
			</Link>
		);
	}
}

// Proptypes
Thumbnail.propTypes = {
	apartment: PropTypes.object.isRequired,
};

export default Thumbnail;
