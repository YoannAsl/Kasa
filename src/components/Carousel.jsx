/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import arrow from '../assets/carousel-arrow.svg';
import '../styles/Carousel.scss';

class Carousel extends Component {
	state = {
		currentImageIndex: 0,
	};

	previousSlide = () => {
		const { currentImageIndex } = this.state;
		const index =
			currentImageIndex === 0
				? this.props.pictures.length - 1
				: currentImageIndex - 1;
		this.setState({ currentImageIndex: index });
	};

	nextSlide = () => {
		const { currentImageIndex } = this.state;
		const index =
			currentImageIndex === this.props.pictures.length - 1
				? 0
				: currentImageIndex + 1;
		this.setState({ currentImageIndex: index });
	};

	render() {
		return (
			<div className='carousel'>
				<img
					className='picture'
					src={this.props.pictures[this.state.currentImageIndex]}
					alt="Photo de l'appartement"
				/>

				{/* Doesnt display the arrows if there is only 1 picture */}
				{this.props.pictures.length > 1 ? (
					<>
						<img
							className='arrow-prev'
							src={arrow}
							alt='Previous slide arrow'
							onClick={this.previousSlide}
						/>
						<img
							className='arrow-next'
							src={arrow}
							alt='Next slide arrow'
							onClick={this.nextSlide}
						/>
					</>
				) : null}

				<p className='image-counter'>
					{this.state.currentImageIndex + 1}/
					{this.props.pictures.length}
				</p>
			</div>
		);
	}
}

export default Carousel;
