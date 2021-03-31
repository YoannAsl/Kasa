import React, { Component } from 'react';
import '../styles/Tag.css';

export class Tag extends Component {
	render() {
		return (
			<li className='tag'>
				<p>{this.props.content}</p>
			</li>
		);
	}
}

export default Tag;
