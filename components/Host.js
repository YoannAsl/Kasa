import Image from 'next/image';

const Host = ({ name, picture }) => {
	const firstName = name.split(' ')[0];
	const lastName = name.split(' ')[1];
	return (
		<div>
			<p>
				<span>{firstName}</span>
				<span>{lastName}</span>
			</p>
			<Image
				src={picture}
				alt={`Photo de ${name}`}
				height={30}
				width={30}
			/>
		</div>
	);
};

export default Host;
