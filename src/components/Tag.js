import React, { Component } from 'react';
import '../styles/Tag.css';

class Tag extends Component {
	render() {
		return <li className='tag'>{this.props.content}</li>;
	}
}

export default Tag;
