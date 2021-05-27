import Head from 'next/head';
import ImageBanner from '../components/ImageBanner';
import Thumbnail from '../components/Thumbnail';

const Home = ({ apartments }) => {
	return (
		<main className='mx-[5%]'>
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
			<div className='flex flex-col p-0 mx-auto bg-white sm:grid sm:p-12 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-14 gap-y-5 sm:bg-[#f7f7f7] rounded-3xl'>
				{apartments.map((apartment) => (
					<Thumbnail key={apartment.id} apartment={apartment} />
				))}
			</div>
		</main>
	);
};

export default Home;
