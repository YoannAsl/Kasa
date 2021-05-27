import Image from 'next/image';
import { useState } from 'react';

const Carousel = ({ pictures }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const previousSlide = () => {
		// If the first picture is displayed, displays the last one
		currentImageIndex === 0
			? setCurrentImageIndex(pictures.length - 1)
			: setCurrentImageIndex(currentImageIndex - 1);
	};

	const nextSlide = () => {
		// If the last picture is displayed, displays the first one
		currentImageIndex === pictures.length - 1
			? setCurrentImageIndex(0)
			: setCurrentImageIndex(currentImageIndex + 1);
	};

	return (
		<div>
			<Image
				src={pictures[currentImageIndex]}
				alt="Photo de l'appartement"
				width={100}
				height={100}
			/>
			{/* Doesnt display the arrows if there is only 1 picture */}
			{pictures.length > 1 ? (
				<>
					<Image
						className='arrow-prev'
						src='/../public/carousel-arrow.svg'
						alt='Previous slide arrow'
						onClick={previousSlide}
						height={30}
						width={30}
					/>
					<Image
						className='arrow-next'
						src='/../public/carousel-arrow.svg'
						alt='Next slide arrow'
						onClick={nextSlide}
						height={30}
						width={30}
					/>
				</>
			) : null}

			<p className='image-counter'>
				{currentImageIndex + 1}/{pictures.length}
			</p>
		</div>
	);
};

export default Carousel;
