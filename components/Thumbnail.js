import Link from 'next/link';
import Image from 'next/image';

const Thumbnail = ({ apartment }) => {
	const { id, cover, title } = apartment;
	return (
		<Link href={`/apartments/${id}`}>
			<a className='relative h-64 border-none sm:h-96'>
				<Image
					src={cover}
					alt={`Photo of ${title}`}
					layout='fill'
					className='object-cover w-full h-full rounded-lg'
				/>
				<div
					className='absolute top-0 left-0 w-full h-full rounded-lg opacity-50 bg-gradient-to-t from-black'
					aria-hidden='true'
				></div>
				<p className='absolute pr-5 text-white bottom-5 left-5'>
					{title}
				</p>
			</a>
		</Link>
	);
};

export default Thumbnail;
