const Rating = ({ rating }) => {
	let stars = [];
	const maxRating = 5;

	for (let i = 0; i < maxRating; i++) {
		rating > i
			? stars.push(
					<svg width='30' height='30' viewBox='0 0 30 30' fill='none'>
						<path
							d='M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z'
							fill='#FF6060'
						/>
					</svg>
			  )
			: stars.push(
					<svg width='30' height='30' viewBox='0 0 30 30' fill='none'>
						<path
							d='M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z'
							fill='#E3E3E3'
						/>
					</svg>
			  );
	}
	return <div>{stars.map((star) => star)}</div>;
};

export default Rating;
