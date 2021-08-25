import React, { Component } from 'react';
import arrow from '../assets/dropdown-arrow.svg';
import '../styles/Dropdown.scss';

class Dropdown extends Component {
	state = { dropdownd: true };

	handleClick = () => {
		this.setState({ dropdownd: !this.state.dropdownd });
	};

	render() {
		let styles = {
			arrow: { transform: 'rotate(180deg)' },
			content: {},
		};

		// eslint-disable-next-line no-unused-expressions
		this.state.dropdownd
			? (styles = {
					arrow: {},
					content: { display: 'none' },
			  })
			: styles;

		return (
			<div className='dropdown'>
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

export default Dropdown;
