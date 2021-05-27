import Image from 'next/image';

const ImageBanner = ({ addedClass, alt, image, text }) => {
	let className = 'image-banner';
	if (addedClass) {
		className += ` ${addedClass}`;
	}
	return (
		<div className={className}>
			<Image src={image} alt={alt} width={500} height={500} />
			{text && <p>{text}</p>}
		</div>
	);
};

export default ImageBanner;
