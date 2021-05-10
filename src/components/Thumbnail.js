import React, { Component } from 'react';
import '../styles/Thumbnail.css';
import { Link } from 'react-router-dom';

class Thumbnail extends Component {
	render() {
		const { cover, title, id } = this.props.apartment;
		return (
			<Link to={`/apartments/${id}`} className='thumbnail'>
				<img src={cover} alt={`Photo of ` + title}></img>
				<p>{title}</p>
			</Link>
		);
	}
}

export default Thumbnail;
