import Link from 'next/link';
import Image from 'next/image';

const Thumbnail = ({ apartment }) => {
	const { id, cover, title } = apartment;
	return (
		<Link href={`/apartments/${id}`}>
			<a>
				<Image
					src={cover}
					alt={`Photo of ${title}`}
					height={100}
					width={100}
				/>
				<p>{title}</p>
			</a>
		</Link>
	);
};

export default Thumbnail;
