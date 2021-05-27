import Image from 'next/image';

const ImageBanner = ({ addedClass, alt, image, text }) => {
	const baseStyle = 'relative w-full h-10 rounded-3xl';
	const styles = { container: '', image: '', text: '' };

	if (addedClass) {
		if (addedClass === 'home-banner') {
			styles.container = `relative w-full rounded-3xl h-28 sm:h-56`;
		}
	}

	return (
		<div className='relative h-56 mb-5 sm:mb-10'>
			{/* <div className={addedClass ? styles.container : baseStyle}> */}
			<Image
				src={image}
				alt={alt}
				layout='fill'
				className='object-cover rounded-3xl'
			/>
			<div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-3xl'></div>
			{text && (
				<p className='absolute left-[10%] top-1/2 transform translate-x-[-10%] -translate-y-1/2 text-2xl sm:text-5xl text-white w-2/3 font-medium sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-auto'>
					{text}
				</p>
			)}
		</div>
	);
};

export default ImageBanner;
