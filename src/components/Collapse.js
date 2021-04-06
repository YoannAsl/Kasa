import React, { Component } from 'react';
import arrow from '../assets/collapse-arrow.svg';
import '../styles/Collapse.css';

export class Collapse extends Component {
	state = { collapsed: true };

	handleClick = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};

	render() {
		let styles = {
			arrow: { transform: 'rotate(180deg)' },
			content: {},
		};

		// eslint-disable-next-line no-unused-expressions
		this.state.collapsed
			? (styles = {
					arrow: {},
					content: { display: 'none' },
			  })
			: styles;

		return (
			<div className='collapse'>
				<div className='trigger' onClick={this.handleClick}>
					<p>{this.props.title}</p>
					<img
						src={arrow}
						alt={'arrow icon'}
						style={styles.arrow}
					></img>
				</div>
				<div className='content' style={styles.content}>
					<p>{this.props.content}</p>
				</div>
			</div>
		);
	}
}

export default Collapse;
