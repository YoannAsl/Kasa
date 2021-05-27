import Head from 'next/head';
import ImageBanner from '../components/ImageBanner';
import Thumbnail from '../components/Thumbnail';

const Home = ({ apartments }) => {
	return (
		<main>
			<Head>
				<title>Kasa - Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ImageBanner
				image='/../public/home-banner-image.jpg'
				alt={
					'green and brown mountain beside body of water during daytime'
				}
				text={'Chez vous, partout et ailleurs'}
				addedClass={'home-banner'}
			/>
			<div className='thumbnails-container'>
				{apartments.map((apartment) => (
					<Thumbnail key={apartment.id} apartment={apartment} />
				))}
			</div>
		</main>
	);
};

export default Home;
